import { Controller, Get, OnApplicationBootstrap} from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController implements OnApplicationBootstrap{
  constructor(private readonly appService: AppService) {}

  async onApplicationBootstrap() {
    console.log('App Bootstrap Started !')
    await this.appService.InitDataBase().catch(err => {
      console.log('Error on Application Bootstrap: ', err)
      process.exit(0);
    })
    console.log('App Post Bootstrap Ended !')
  }

  @Get('ping')
  ping(): string {
    return this.appService.ping();
  }
}
