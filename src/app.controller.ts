import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get(':n')
calculateFactorial(@Param('n') n: string): { result: number } {
    const numberN = parseInt(n, 10);
    if (isNaN(numberN) || numberN < 0) throw new BadRequestException('Please provide a valid non-negative integer for n.');
    return { result: this.factorial(numberN) };
}

private factorial(n: number): number {
    return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}


}
