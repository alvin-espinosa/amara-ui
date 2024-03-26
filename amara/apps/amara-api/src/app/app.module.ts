import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './modules/organizations/organizations.module';

@Module({
  imports: [
    ConfigModule.forRoot({

    }),
    OrganizationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
