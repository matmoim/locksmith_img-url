import { BadRequestException, HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateLocksmithDto } from './dto/create-locksmith.dto';
import { Locksmith } from './entity/locksmith.entity';
import * as fse from 'fs-extra';
import * as path from 'path';
import { CreateRequestDto } from './dto/create-request.dto';
import { Request } from './entity/request.entity';
import { UpdateLocksmithDto } from './dto/update-locksmith.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { validateMIMEType } from "validate-image-type";
import { Time } from './entity/time.entity';
import {  UpdateSetTimeDto } from './dto/UpdtSetTimeDto.dto';
import { SelectWorkingDays } from './dto/select-working.dto';
import { UpdtSelktWorkDayDto } from './dto/UpdtSelWkD.dto';


const ALLOWED_TYPES = [
    'image/jpeg',
    'image/png'
];


@Injectable()
export class FormMemberService {
    constructor(
        @InjectRepository(Locksmith)
        private readonly locksmithRepository: Repository<Locksmith>,

        @InjectRepository(Request)
        private readonly requestRepository: Repository<Request>,
        private readonly httpService: HttpService,
    ) { }

    public async getAll(): Promise<Locksmith[]> {
        return this.locksmithRepository.find()
    }

    public async create(createLocksmithDto: CreateLocksmithDto): Promise<Locksmith> {
        let photo;
        if (createLocksmithDto.prevNameFolder) {
            const getRequest = await this.requestRepository.findOne({ id: createLocksmithDto.prevNameFolder })
            photo = getRequest ? getRequest.photo : '';
        }

        return this.locksmithRepository.save({ ...createLocksmithDto, photo })
            .then(res => {
                if (createLocksmithDto.prevNameFolder) {
                    this.renamemdir(createLocksmithDto.prevNameFolder, res.id);
                    this.removeRequest(createLocksmithDto.prevNameFolder)
                }
                return res
            });
    }

    public async update(updateLocksmithDto: UpdateLocksmithDto): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Locksmith)
            .set({ ...updateLocksmithDto })
            .where("id = :id", { id: updateLocksmithDto.id })
            .execute();
    }

    public async thedays(updateSelectWorkinDto: UpdtSelktWorkDayDto): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(SelectWorkingDays)
    }

    

    public async choiseTime(updateSelectWorkinDto: UpdateSetTimeDto): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Time)
    }


    public async createRequest(createRequestDto: CreateRequestDto): Promise<Request> {
        return this.requestRepository.save(createRequestDto);
    }

    public async getAllRequest(): Promise<Request[]> {
        return this.requestRepository.find();
    }

    public async remove(id: string) {
        return await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Locksmith)
            .where(`id = :id`, { id })
            .execute()
            .then((res) => {
                const filePath = __dirname + `/../../../pictures/${id}`
                this.rmdir(filePath);
                if (res.affected) {
                    return {
                        message: `Locsmith id: ${id} was deleted`,
                        status: 200
                    }
                } else {
                    throw new HttpException(BadRequestException, HttpStatus.BAD_REQUEST)
                }
            });
    }

    public async removeRequest(id: string) {
        return await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Request)
            .where(`id = :id`, { id })
            .execute()
            .then((res) => {
                const filePath = __dirname + `/../../../pictures/${id}`
                this.rmdir(filePath);
                if (res.affected) {
                    return {
                        message: `Request id: ${id} was deleted`,
                        status: 200
                    }
                } else {
                    throw new HttpException(BadRequestException, HttpStatus.BAD_REQUEST)
                }
            });

    }

    public async search(key_word: string): Promise<Locksmith[]> {
        return this.locksmithRepository.createQueryBuilder()
            .where(`zips @> ARRAY[:key_word]::varchar[] OR SIMILARITY(adress, :key_word) > 0.1`, { key_word })
            // .orWhere('SIMILARITY(adress, :key_word) > 0.1', { key_word })
            .limit(10)
            .getMany();
    }

    public async uploadFile(file: Express.Multer.File, locksmith_id: string, entity: string, fileType: string): Promise<String> {
        try {
            const { filePath, fileName } = await this.makeFileName(locksmith_id, file.originalname);

            fse.outputFileSync(
                filePath,
                file.buffer
            );

            if (entity === 'locksmith') {
                this.updateFilePathLocksmith(locksmith_id, fileName);
            } else {
                this.updateFilePathRequest(locksmith_id, fileName, fileType);
            }

            return 'Success!'
        } catch (e) {
            throw e;
        }
    }

    async uploadPhotoByUrl(url: string, keyId: string) {
        const { fileName, filePath } = await this.makeFileName(keyId, url, true);

        const onlyPath = filePath.slice(0, filePath.indexOf(fileName));
        console.log(onlyPath);
        console.log(filePath);

        if (!fse.existsSync(onlyPath)) {
            fse.mkdirSync(filePath, { recursive: true });
        }

        const writer = fse.createWriteStream(filePath);


        return new Promise((resolve, reject) => {
            this.httpService
                .get(url, { responseType: 'stream' })
                .toPromise()
                .then(response => {
                    response.data.pipe(writer);
                });

            writer.on('error', reject);
            writer.on('finish', () => {
                const currentType = ALLOWED_TYPES.find((type) => validateMIMEType(filePath, { allowMimeTypes: [type] }).ok)?.split('/')[1];

                if (currentType) {
                    const newPath = filePath + '.' + currentType;

                    fse.renameSync(filePath, newPath);

                    resolve(fileName + '.' + currentType);
                }

                reject(`File should be one of ${ALLOWED_TYPES.join()} formats`);
            });
        });
    }

    private async updateRequest(updateRequestDto: UpdateRequestDto): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Request)
            .set({ ...updateRequestDto })
            .where("id = :id", { id: updateRequestDto.id })
            .execute();
    }

    private async updateFilePathLocksmith(locksmith_id: string, fileName: string) {
        const locksmith_data = await this.locksmithRepository.findOne({ id: locksmith_id });

        if (locksmith_data) {
            locksmith_data.photo = fileName;
            await this.update(locksmith_data);
        }
    }

    private async updateFilePathRequest(request_id: string, fileName: string, fileType: string) {
        const request_data = await this.requestRepository.findOne({ id: request_id });

        if (request_data) {
            if (fileType === 'photo') {
                request_data.photo = fileName;
            }
            await this.updateRequest(request_data);
        }
    }

    private renamemdir(currPath: string, newPath: string) {
        fse.rename(__dirname + `/../../../pictures/${currPath}`, __dirname + `/../../../pictures/${newPath}`, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Successfully renamed the directory.")
            }
        });
    };

    private rmdir(dir: string) {
        var list = fse.readdirSync(dir);
        for (var i = 0; i < list.length; i++) {
            var filename = path.join(dir, list[i]);
            var stat = fse.statSync(filename);

            if (filename == "." || filename == "..") {
                // pass these files
            } else if (stat.isDirectory()) {
                this.rmdir(filename);
            } else {
                // rm fiilename
                fse.unlinkSync(filename);
            }
        }
        fse.rmdirSync(dir);
    };

    private makeFileName(keyId: string, pictureName: string, skipExtension: boolean = false): { filePath: string, fileName: string } {
        const fileName = this.makeUniqueId(15) + (skipExtension ? '' : pictureName.match(/\.[0-9a-z]+$/i));
        const filePath = __dirname + `/../../../pictures/${keyId + '/' + fileName}`;

        return {
            filePath,
            fileName,
        }
    }

    private makeUniqueId(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
