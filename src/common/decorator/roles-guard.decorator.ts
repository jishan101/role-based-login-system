import { applyDecorators, UseGuards } from '@nestjs/common';
import { RolesAuthGuard } from '../guard/roles-auth.guard';

export function RolesGuard() {
  return applyDecorators(UseGuards(RolesAuthGuard));
}
