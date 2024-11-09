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
checkPrime(@Param('n') n: string): { isPrime: boolean } {
    const numberN = parseInt(n, 10);
    if (isNaN(numberN) || numberN < 1) throw new BadRequestException('Please provide a valid positive integer for n.');
    return { isPrime: this.isPrime(numberN) };
}

private isPrime(num: number): boolean {
    return num > 1 && ![...Array(Math.floor(Math.sqrt(num)) - 1)].some((_, i) => num % (i + 2) === 0);
}
  
}
