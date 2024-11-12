import { Module } from '@nestjs/common';
import { CreateProductController } from './controllers/createProduct.controller';
import { CreateProductService } from './services/createProduct.service';
import { ListProductController } from './controllers/listProduct.controller';
import { ListProductsService } from './services/listProducts.service';
import { ProductRepository } from './repositories/product.repository';
import { ProductsDatabase } from './database/products.database';
import { UpdateProductController } from './controllers/updateProduct.controller';
import { UpdateProductService } from './services/updateProduct.service';
import { ResponseApi } from './utils/responseApi.utils';
import { Response } from 'express';

@Module({
  imports: [],
  controllers: [
    CreateProductController,
    ListProductController,
    UpdateProductController,
  ],
  providers: [
    CreateProductService,
    ListProductsService,
    UpdateProductService,
    ProductRepository,
    ProductsDatabase,
    ResponseApi,
  ],
})
export class AppModule {}
