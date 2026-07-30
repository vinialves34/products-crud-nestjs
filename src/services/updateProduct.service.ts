import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateProductDTO } from 'src/dto/updateProduct.dto';
import { ProductRepository } from 'src/repositories/product.repository';

@Injectable()
export class UpdateProductService {
  constructor(private readonly repository: ProductRepository) {}

  async execute(productId: string, productData: UpdateProductDTO) {
    const productSearched = await this.repository.findOne(productId);

    if (!productSearched) {
      throw new HttpException('Product not found.', HttpStatus.NOT_FOUND);
    }

    const updateProduct = await this.repository.update(
      productSearched,
      productData,
    );
  }
}
