import { UseGuards, applyDecorators } from "@nestjs/common";
import { Roles } from "./roles.decorators";
import { AuthGuard } from "../guard/auth.guard";
import { RoleGuard } from "../guard/role.guard";
import { Role } from "src/common/role.enum";


export function Auth(role: Role) {
    return applyDecorators(Roles(role), UseGuards(AuthGuard, RoleGuard));
  }