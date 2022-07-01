import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExampleDto } from './dtos';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get('/:name')
  getExample(@Param('name') name: string) {
    return this.exampleService.getExample(name);
  }

  @Post()
  postExample(@Body() example: ExampleDto) {
    return this.exampleService.postExample(example);
  }
}
