import { Injectable } from '@nestjs/common';
import { ExampleDto } from './dtos';

@Injectable()
export class ExampleService {
  getExample(name: string) {
    return `Name: ${name}`;
  }

  postExample({ name, total }: ExampleDto) {
    return `Name: ${name} - Total ${total}`;
  }
}
