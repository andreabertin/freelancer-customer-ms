import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { AppConfig, APP_CONFIG_KEY } from '@configs/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const appConfig = config.getOrThrow<AppConfig>(APP_CONFIG_KEY);
  await app.listen(appConfig.port);
}

bootstrap();
