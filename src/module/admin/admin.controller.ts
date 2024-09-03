import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiRolesGuard } from 'src/common/decorator/api-roles-guard.decorator';
import { CurrentUser } from 'src/common/decorator/current-user.decorator';
import { UserPayload } from '../auth/dto/user-payload.dto';
import { RoleEnum } from '../user/enum/role.enum';
import { AdminService } from './admin.service';

@ApiTags("Admin Panel API's")
@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiRolesGuard(RoleEnum.ADMIN)
  @ApiOkResponse({ type: String })
  @Get('admin')
  public getHello(@CurrentUser() authUser: UserPayload): string {
    return this.adminService.getHello(authUser);
  }
}
