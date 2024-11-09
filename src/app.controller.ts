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
    if (numberN < 1) throw new BadRequestException('Provide a positive integer for n.');
    return { sequence: this.fibonacci(numberN) };
}

private fibonacci(n: number): number[] {
    const sequence = [0, 1];
    while (sequence.length < n) sequence.push(sequence.at(-2) + sequence.at(-1));
    return sequence.slice(0, n);
}

}
