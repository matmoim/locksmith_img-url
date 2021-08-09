import { IsUrl, IsUUID } from "class-validator";

export default class UploaPhotoByUrlDto {
  @IsUUID()
  locksmith_id!: string;

  @IsUrl()
  photoUrl!: string;
}