import { Body, Controller, Logger, Post, Req, Res } from '@nestjs/common';
import { CreateProductService } from '../services/createProduct.service';
import { Request, Response } from 'express';
import { ProductDTO } from 'src/dto/product.dto';

@Controller('product')
export class CreateProductController {
  private readonly logger = new Logger(CreateProductController.name);

  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  async handle(
    @Body() productDto: ProductDTO,
    @Res() res: Response,
  ): Promise<void> {
    try {
      await this.createProductService.execute(productDto);

      res.sendStatus(201);
    } catch (error) {
      this.logger.error(`Unable to register product. \nReason: ${error}`);
      res.sendStatus(500);
    }
  }
}
