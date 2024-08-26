import { IsString, MaxLength, MinLength } from 'class-validator'

export class CreateStoreDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  name!: string
}
