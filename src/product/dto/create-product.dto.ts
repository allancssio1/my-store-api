import { IsString, IsUUID, MaxLength, MinLength } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @MaxLength(255)
  @MinLength(2)
  title!: string

  @IsString()
  @MaxLength(255)
  @MinLength(3)
  description!: string

  @IsString()
  @IsUUID()
  storeId!: string
}
