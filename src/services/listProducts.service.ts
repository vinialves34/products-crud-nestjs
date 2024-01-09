import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductRepository } from 'src/repositories/product.repository';

@Injectable()
export class ListProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll();

    return products;
  }
}
