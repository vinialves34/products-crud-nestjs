import { Body, Controller, Logger, Param, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { UpdateProductDTO } from 'src/dto/updateProduct.dto';
import { UpdateProductService } from 'src/services/updateProduct.service';
import { ResponseApi } from 'src/utils/responseApi.utils';

@Controller('product')
export class UpdateProductController {
  private readonly logger = new Logger(UpdateProductController.name);

  constructor(
    private readonly service: UpdateProductService,
    private readonly resApi: ResponseApi,
  ) {}

  @Put(':uuid')
  async handle(
    @Param('uuid') productId: string,
    @Body() productDto: UpdateProductDTO,
    @Res() res: Response,
  ): Promise<Response> {
    try {
      const product = await this.service.execute(productId, productDto);

      return res.json(product).send();
    } catch (error) {
      this.logger.error(`Unable to update product. \nReason: ${error.message}`);
      this.resApi.error(error.message, error.status);
    }
  }
}
