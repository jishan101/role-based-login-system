import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../user/dto/create-user.dto';
import { UserResponseDTO } from '../user/dto/user-response.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginResponseDTO } from './dto/login-response.dto';
import { LoginDTO } from './dto/login.dto';

@ApiTags("Authentication API's")
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserResponseDTO })
  @Post('register')
  public create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: LoginResponseDTO })
  @Post('login')
  public login(@Body() body: LoginDTO): Promise<LoginResponseDTO> {
    return this.authService.login(body);
  }
}
