import { Module } from '@nestjs/common';
import { CreateProductController } from './controllers/createProduct.controller';
import { CreateProductService } from './services/createProduct.service';
import { ListProductController } from './controllers/listProduct.controller';
import { ListProductsService } from './services/listProducts.service';
import { ProductRepository } from './repositories/product.repository';
import { ProductsDatabase } from './database/products.database';

@Module({
  imports: [],
  controllers: [CreateProductController, ListProductController],
  providers: [
    CreateProductService,
    ListProductsService,
    ProductRepository,
    ProductsDatabase,
  ],
})
export class AppModule {}
