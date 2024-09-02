import { RoleEnum } from 'src/module/user/enum/role.enum';

export class UserPayload {
  sub: string;
  userId: string;
  username: string;
  role: RoleEnum;

  constructor(partial?: Partial<UserPayload>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
