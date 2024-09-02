import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

export function ApiGuard() {
  return applyDecorators(UseGuards(JwtAuthGuard));
}
