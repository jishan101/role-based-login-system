import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserPayload } from 'src/module/auth/dto/user-payload.dto';
import { RoleEnum } from 'src/module/user/enum/role.enum';

@Injectable()
export class RolesAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<RoleEnum[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: UserPayload = request.user;

    if (!user) {
      throw new ForbiddenException('Unauthorized user.');
    }

    if (!user.hasRole(requiredRoles)) {
      throw new ForbiddenException('You do not have the required role.');
    }

    return true;
  }
}
