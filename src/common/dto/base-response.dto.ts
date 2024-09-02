import { ApiResponseProperty } from '@nestjs/swagger';

export class BaseResponseDTO {
  @ApiResponseProperty()
  id: string;

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty()
  updatedAt: Date;

  @ApiResponseProperty()
  isActive: boolean;
}
