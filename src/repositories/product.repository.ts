import { Injectable } from '@nestjs/common';
import { ProductsDatabase } from 'src/database/products.database';
import { UpdateProductDTO } from 'src/dto/updateProduct.dto';
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

  async findOne(productId: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      const product = this.inMemory.find((value) => value.uuid === productId);

      resolve(product);
    });
  }

  async save(product: Product): Promise<void> {
    return new Promise((resolve, reject) => {
      this.inMemory.push(product);

      resolve();
    });
  }

  async update(
    product: Product,
    productData: UpdateProductDTO,
  ): Promise<Product> {
    return new Promise((resolve, reject) => {
      console.log();
    });
  }
}
