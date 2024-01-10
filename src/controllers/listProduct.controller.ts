import { Controller, Get, Logger, Res } from '@nestjs/common';
import { Response } from 'express';
import { Product } from 'src/entities/product.entity';
import { ListProductsService } from 'src/services/listProducts.service';

@Controller('product')
export class ListProductController {
  private readonly logger = new Logger(ListProductController.name);

  constructor(private readonly service: ListProductsService) {}

  @Get()
  async handle(@Res() res: Response): Promise<Response> {
    try {
      const products = await this.service.execute();

      return res.json(products).send();
    } catch (error) {
      this.logger.error(`Unable to list products. \nReason: ${error}`);
      res.sendStatus(500);
    }
  }
}
