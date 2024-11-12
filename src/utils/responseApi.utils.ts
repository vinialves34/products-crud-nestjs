import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ResponseApi {
  constructor(private readonly response: Response) {}

  error(message: string, statusCode: number = 500): Response {
    const res = this.response.status(statusCode).json({
      message,
      statusCode,
    });

    return res;
  }
}
