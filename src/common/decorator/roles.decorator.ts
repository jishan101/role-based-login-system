import { SetMetadata } from '@nestjs/common';
import { RoleEnum } from 'src/module/user/enum/role.enum';

export const Roles = (...roles: RoleEnum[]) => SetMetadata('roles', roles);
