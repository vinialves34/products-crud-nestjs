import { Controller, Get, Logger } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ListProductsService } from 'src/services/listProducts.service';

@Controller('product')
export class ListProductController {
  private readonly logger = new Logger(ListProductController.name);

  constructor(private readonly service: ListProductsService) {}

  @Get()
  async handle(): Promise<Product[]> {
    try {
      const products = await this.service.execute();

      return products;
    } catch (error) {
      this.logger.error(`Unable to list products. \nReason: ${error}`);
    }
  }
}
