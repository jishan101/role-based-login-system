import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Role Based Login System');

  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  app.setGlobalPrefix('api/v1');

  app.enableShutdownHooks();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Role Based Login System')
    .setDescription("Role Based Login System API's")
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const port = +config.get<number>('PORT', 4000);

  await app.listen(port, async () => {
    const appBaseUrl = await app.getUrl();

    logger.log(
      `App is running on: ${appBaseUrl} and Swagger UI is on: ${appBaseUrl}/docs`,
    );
  });
}
bootstrap();
