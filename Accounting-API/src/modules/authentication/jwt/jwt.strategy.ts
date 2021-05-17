import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import { jwtConstant } from "./constants";
import {UserEntity} from "../../../core/modules/database/models/entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstant.secret
        });
    }

    async validate(payload: { username: string, id: number }) {
        const user = await UserEntity.findOne({
            where: { id: payload.id, username: payload.username }
        });

        if (!user) {
            throw new BadRequestException();
        }
        return user;
    }
}
