import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateLocksmithDto } from '../dto/create-locksmith.dto';
import { CreateRequestDto } from '../dto/create-request.dto';
import { UpdateLocksmithDto } from '../dto/update-locksmith.dto';
import UploaPhotoByUrlDto from '../dto/upload-photo-by-url';
import { Locksmith } from '../entity/locksmith.entity';
import { Request } from '../entity/request.entity';
import { FormMemberService } from '../services/form-member.service';

@Controller('form-member')
export class FormMemberController {
    constructor(
        private readonly formMemberService: FormMemberService

    ) { }


    @Get('get-all')
    public async getAll(): Promise<Locksmith[]> {
        return this.formMemberService.getAllLockSmithes();
    }

    @Get('get-all-request')
    public async getAllRequest(): Promise<Request[]> {
        return this.formMemberService.getAllRequests();
    }

    @Get('search/:key_word')
    public async search(
        @Param('key_word') key_word: string
    ): Promise<Locksmith[]> {
        return this.formMemberService.searchLockSmith(key_word);
    }

    @Post('add-photo/by-url')
    public addPhotoByUrl(
        @Query() dataForPhoto: UploaPhotoByUrlDto,
    ) {
        const { locksmith_id, photoUrl } = dataForPhoto;

        return this.formMemberService.uploadPhotoByUrl(photoUrl, locksmith_id);
    }

    @Post('add-photo/:locksmith_id/:entity/:typeFile')
    @UseInterceptors(FileInterceptor('file'))
    public async addPhotoToLocksmith(
        @UploadedFile() file: Express.Multer.File,
        @Param('locksmith_id') locksmith_id: string,
        @Param('entity') entity: string,
        @Param('typeFile') typeFile: string

    ): Promise<String> {
        return this.formMemberService.uploadFile(file, locksmith_id, entity, typeFile);
    }

    @Post('create')
    public async createLocksmith(
        @Body() createLocksmithDto: CreateLocksmithDto,
    ): Promise<Locksmith> {
        return this.formMemberService.createLockSmith(createLocksmithDto);
    }

    @Post('create-request')
    public async createRequest(
        @Body() createLocksmithDto: CreateRequestDto
    ) {
        return this.formMemberService.createRequest(createLocksmithDto);
    }

    @Put('update')
    public async updateLocksmith(
        @Body() updateLocksmithDto: UpdateLocksmithDto
    ): Promise<void> {
        return this.formMemberService.updateLockSmith(updateLocksmithDto);
    }

    @Delete('remove/:id')
    public async remove(
        @Param() params: { id: string }
    ) {
        return this.formMemberService.removeLockSmith(params.id)
    }

    @Delete('remove-request/:id')
    public async removeRequest(
        @Param() params: { id: string }
    ) {
        return this.formMemberService.removeRequest(params.id)
    }
}
