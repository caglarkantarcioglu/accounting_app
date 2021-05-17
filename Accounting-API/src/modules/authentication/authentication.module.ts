import { Module } from '@nestjs/common';
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstant } from './jwt/constants';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: {expiresIn: "24h"},
    privateKey: jwtConstant.privateKey,
  })],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtStrategy],
})
export class AuthenticationModule {}
