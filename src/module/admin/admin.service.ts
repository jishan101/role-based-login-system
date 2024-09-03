import { Injectable } from '@nestjs/common';
import { UserPayload } from '../auth/dto/user-payload.dto';

@Injectable()
export class AdminService {
  public getHello(authUser: UserPayload): string {
    return `Hello ${authUser.username}(${authUser.role})`;
  }
}
