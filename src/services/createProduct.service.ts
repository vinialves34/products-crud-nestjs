import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/entities/product.entity';
import { ProductRepository } from 'src/repositories/product.repository';

@Injectable()
export class CreateProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(productData: ProductDTO): Promise<void> {
    const productEntity = new Product();

    Object.assign(productEntity, productData);

    this.productRepository.save(productEntity);
  }
}
