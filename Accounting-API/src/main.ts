import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Response, Request} from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

  app.enableCors({
    origin: ['*'],
    methods: ['*'],
    allowedHeaders: ['*'],
    optionsSuccessStatus: 204,
    preflightContinue: false,
    credentials: true,
  });


  await app.listen(3000);
}
bootstrap();
