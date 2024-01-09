import { Injectable } from '@nestjs/common';
import { ProductsDatabase } from 'src/database/products.database';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductRepository {
  private inMemory: Product[];

  constructor(private database: ProductsDatabase) {
    this.inMemory = this.database.products;
  }

  async findAll(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      resolve(this.inMemory);
    });
  }
}
