import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [ConfigModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public config = this.configService.config;

  constructor(private configService: ConfigService) {}
}
