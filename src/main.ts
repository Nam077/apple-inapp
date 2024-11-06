import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());

    // Cấu hình Swagger
    const config = new DocumentBuilder()
        .setTitle('API Documentation') // Tiêu đề API
        .setDescription('API description') // Mô tả API
        .setVersion('1.0') // Phiên bản API
        .addTag('in-app') // Thêm thẻ cho các endpoint liên quan
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // Thiết lập đường dẫn cho Swagger UI

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
