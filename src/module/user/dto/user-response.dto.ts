import { ApiResponseProperty } from '@nestjs/swagger';
import { BaseResponseDTO } from '../../../common/dto/base-response.dto';

export class UserResponseDTO extends BaseResponseDTO {
  @ApiResponseProperty()
  username: string;

  @ApiResponseProperty()
  role: string;
}
