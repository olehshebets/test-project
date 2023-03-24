import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './modules/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const prismaService = app.get(PrismaService);

  await prismaService.enableShutdownHooks(app);

  await app.listen(3333);
}
bootstrap();
