import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { AuthorizationModule } from 'apps/amara-api/src/core/authorization/authorization.module';

@Module({
  imports: [AuthorizationModule],
  controllers: [ OrganizationsController ],
  providers: [ OrganizationsService ],
})
export class OrganizationsModule {}
