import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {UserEntity} from "../../../core/modules/database/models/entities/user.entity";

export const AuthenticatedUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: UserEntity = request.user;
    return data ? user && user[data] : user;
});
