import { HttpStatus } from '@nestjs/common';
export function createResponse(code: string, message: string, res: any): any {
  const responses = {
    '404': (msg: string) =>
      res.status(HttpStatus.NOT_FOUND).send({
        status: false,
        code: HttpStatus.NOT_FOUND,
        message: msg,
      }),

    '200': (msg: any) =>
      res.status(HttpStatus.OK).json({
        status: true,
        code: HttpStatus.OK,
        message: msg,
      }),

    '501': (msg: any) =>
      res.status(HttpStatus.NOT_FOUND).json({
        status: false,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: msg,
      }),
  };
  responses[code](message);
}
