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
generateFibonacci(@Param('n') n: string): { sequence: number[] } {
    const numberN = parseInt(n, 10);
    if (isNaN(numberN) || numberN < 1) throw new BadRequestException('Please provide a valid positive integer for n.');
    return { sequence: this.fibonacci(numberN) };
}

private fibonacci(n: number): number[] {
    let [a, b] = [0, 1];
    return Array.from({ length: n }, () => {
        const current = a;
        [a, b] = [b, a + b];
        return current;
    });
}



}
