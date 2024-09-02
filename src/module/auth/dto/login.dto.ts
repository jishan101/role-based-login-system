import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ description: 'Put username here.' })
  @IsString({ message: 'Put username here.' })
  @MinLength(1)
  @Transform((x: any) =>
    !x.value || typeof x.value !== 'string' ? x.value : x.value.trim(),
  )
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @Transform((x: any) =>
    !x.value || typeof x.value !== 'string' ? x.value : x.value.trim(),
  )
  password: string;
}
