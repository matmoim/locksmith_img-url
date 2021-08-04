import { Body, Controller, Delete, Get, Inject, Injectable, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CreateLocksmithDto } from './dto/create-locksmith.dto';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateLocksmithDto } from './dto/update-locksmith.dto';
import { Locksmith } from './entity/locksmith.entity';
import { Request } from './entity/request.entity';
import { FormMemberService } from './form-member.service';

@Controller('form-member')
export class FormMemberController {
    constructor(
        private readonly formMemberService: FormMemberService
    ){}

    @Get('get-all')
    public async getAll(): Promise<Locksmith[]> {
        return this.formMemberService.getAll();
    }

    @Get('get-all-request')
    public async getAllRequest(): Promise<Request[]> {
        return this.formMemberService.getAllRequest();
    }

    @Get('search/:key_word')
    public async search(
        @Param('key_word') key_word: string
    ): Promise<Locksmith[]> {        
        return this.formMemberService.search(key_word);
    }

    @Post('add-photo/:locksmith_id/:entity/:typeFile')
    @UseInterceptors(FileInterceptor('file'))
    public async addPhotoToLocksmith(
        @UploadedFile() file: Express.Multer.File, 
        @Param('locksmith_id') locksmith_id: string,
        @Param('entity') entity: string,
        @Param('typeFile') typeFile: string

    ): Promise<String> {
        console.log(file, locksmith_id);
        return this.formMemberService.uploadFile(file, locksmith_id, entity, typeFile);
    }

    @Post('create')
    public async createLocksmith(
        @Body() createLocksmithDto: CreateLocksmithDto,
    ): Promise<Locksmith> {
        return this.formMemberService.create(createLocksmithDto);
    }

    @Post('create-request')
    public async createRequest(
        @Body() createLocksmithDto: CreateRequestDto
    ): Promise<Request> {
        return this.formMemberService.createRequest(createLocksmithDto);
    }
    
    @Put('update')
    public async updateLocksmith(
        @Body() updateLocksmithDto: UpdateLocksmithDto
    ): Promise<void> {
        return this.formMemberService.update(updateLocksmithDto);
    }

    @Delete('remove/:id')
    public async remove(
        @Param() params: { id: string }
    ) {
        return this.formMemberService.remove(params.id)
    }

    @Delete('remove-request/:id')
    public async removeRequest(
        @Param() params: { id: string }
    ) {
        return this.formMemberService.removeRequest(params.id)
    }
}
