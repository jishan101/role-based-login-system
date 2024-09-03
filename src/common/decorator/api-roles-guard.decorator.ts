import { applyDecorators } from '@nestjs/common';
import { RoleEnum } from 'src/module/user/enum/role.enum';
import { ApiGuard } from './api-guard.decorator';
import { RolesGuard } from './roles-guard.decorator';
import { Roles } from './roles.decorator';

export function ApiRolesGuard(...roles: RoleEnum[]) {
  return applyDecorators(ApiGuard(), Roles(...roles), RolesGuard());
}
