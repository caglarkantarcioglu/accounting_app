import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthGuard } from "@nestjs/passport";
import { AuthenticatedUser } from "./decorators/authenticated-user.decorator";
import { UserEntity } from "../../core/modules/database/models/entities/user.entity";

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {
  }

  @Post("login")
  login(@Body() user) {
    return this.authService.login(user);
  }

  @Post("register")
  async register(@Body() newUser) {
    const _user = await UserEntity.findOne({ where: { email: newUser.email } });
    if (_user) {
      throw new BadRequestException("Bu Eposta ile daha önce kayıt yapılmış!");
    }

    const __user = await UserEntity.findOne({ where: { username: newUser.username } });
    if (__user) {
      throw new BadRequestException("Bu Kullanıcı Adı ile daha önce kayıt yapılmış!");
    }
    return this.authService.register(newUser);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get()
  authentication(@AuthenticatedUser() user) {
    return {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
  }
}
