import { Module } from '@nestjs/common';
import { CreateProductController } from './controllers/createProduct.controller';
import { CreateProductService } from './services/createProduct.service';

@Module({
  imports: [],
  controllers: [CreateProductController],
  providers: [CreateProductService],
})
export class AppModule {}
