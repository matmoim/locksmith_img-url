import { CreateLocksmithDto } from "./create-locksmith.dto";

export class UpdateLocksmithDto extends CreateLocksmithDto {
    id!: string;
}