import { Controller, Post } from '@nestjs/common';
import { CreateProductService } from '../services/createProduct.service';

@Controller('product')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  handle(): void {}
}
