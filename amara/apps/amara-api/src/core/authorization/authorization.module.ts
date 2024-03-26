import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: [`.env.stage.${process.env.STAGE}`],
      // validationSchema: configValidationSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AuthorizationModule {}
