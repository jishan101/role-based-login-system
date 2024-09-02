import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginResponseDTO } from './dto/login-response.dto';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  private async validateUser(credentials: LoginDTO) {
    const user = await this.userService.findOneByKey(
      'username',
      credentials.username,
    );
    if (!user) {
      throw new BadRequestException('Wrong username.');
    }

    if (!user?.isActive) {
      throw new BadRequestException('Requested user is inactive.');
    }

    const isPasswordValid = await this.userService.comparePassword(
      credentials.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Password is incorrect.');
    }

    return user;
  }

  public async login(credentials: LoginDTO): Promise<LoginResponseDTO> {
    const validUser = await this.validateUser(credentials);
    delete validUser.password;

    const payload = {
      sub: validUser.id,
      userId: validUser.id,
      username: validUser.username,
      role: validUser.role,
    };

    return new LoginResponseDTO(this.jwtService.sign(payload));
  }
}
