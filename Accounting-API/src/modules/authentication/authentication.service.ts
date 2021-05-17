import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { jwtConstant } from "./jwt/constants";
import { UserEntity } from "../../core/modules/database/models/entities/user.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthenticationService {
  constructor(private jwtService: JwtService) {
  }

  async login(user) {
    const selectedUser = await UserEntity.findOne({ where: { username: user.username, password: user.password } });

    if (!selectedUser) {
      throw new UnauthorizedException("Kullanıcı Adı veya Şifre Yanlış!");
    }

    /* User Login Create JWT*/
    const payload = { username: selectedUser.username, id: selectedUser.id };
    return {
      token: this.jwtService.sign(payload, { privateKey: jwtConstant.privateKey })
    };
  }

  register(newUser) {
    return UserEntity.create(newUser);
  }
}
