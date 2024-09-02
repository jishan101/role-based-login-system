import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { RoleEnum } from '../enum/role.enum';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @Transform((x: any) =>
    !x.value || typeof x.value !== 'string' ? x.value : x.value.trim(),
  )
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Transform((x: any) =>
    !x.value || typeof x.value !== 'string' ? x.value : x.value.trim(),
  )
  password: string;

  @ApiProperty({ enum: RoleEnum })
  @IsEnum(RoleEnum)
  @IsNotEmpty()
  role: RoleEnum;
}
