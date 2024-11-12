import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from 'src/dto/createProduct.dto';
import { Product } from 'src/entities/product.entity';
import { ProductRepository } from 'src/repositories/product.repository';

@Injectable()
export class CreateProductService {
  constructor(private readonly repository: ProductRepository) {}

  async execute(productData: CreateProductDTO): Promise<void> {
    const productEntity = new Product();

    Object.assign(productEntity, productData);

    this.repository.save(productEntity);
  }
}
