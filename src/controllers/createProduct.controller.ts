import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { CreateProductService } from '../services/createProduct.service';
import { Request, Response } from 'express';
import { CreateProductDTO } from 'src/dto/createProduct.dto';

@Controller('product')
export class CreateProductController {
  private readonly logger = new Logger(CreateProductController.name);

  constructor(private readonly service: CreateProductService) {}

  @Post()
  async handle(
    @Body() productDto: CreateProductDTO,
    @Res() res: Response,
  ): Promise<void> {
    try {
      await this.service.execute(productDto);

      res.sendStatus(201);
    } catch (error) {
      this.logger.error(
        `Unable to register product. \nReason: ${error.message}`,
      );
      res.sendStatus(500);
    }
  }
}
