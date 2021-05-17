import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthenticatedUser } from "../authentication/decorators/authenticated-user.decorator";
import { AuthGuard } from "@nestjs/passport";
import * as fs from "fs";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserImageStorage } from "../../shared/multer/user-image.storage";

@UseGuards(AuthGuard("jwt"))
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get('money')
  async getUserMoney(@AuthenticatedUser() user){
    return this.userService.getUserMoney(user)
  }

  @Patch()
  async updateUser(@AuthenticatedUser() user, @Body() body) {
    return this.userService.updateUser(user, body);
  }

  @Patch("change-password")
  async changePassword(@AuthenticatedUser() user, @Body() passwords) {
    return this.userService.changePassword(user, passwords);
  }

  @Get("image")
  async get(@AuthenticatedUser() user) {
    try {
      const file = await fs.readFileSync("./uploads/user/" + user.id + ".jpg");
      return file;
    } catch (e) {
      return false;
    }

  }

  @Post("image")
  @UseInterceptors(
    FileInterceptor("profile-image", {
        storage: UserImageStorage
      }
    )
  )
  async uploadedFile(@AuthenticatedUser() user, @UploadedFile() file) {
  }

}
