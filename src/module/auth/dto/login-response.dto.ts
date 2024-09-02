import { ApiResponseProperty } from '@nestjs/swagger';

export class LoginResponseDTO {
  @ApiResponseProperty()
  access_token: string;

  constructor(access_token?: string) {
    if (access_token) {
      this.access_token = access_token;
    }
  }
}
