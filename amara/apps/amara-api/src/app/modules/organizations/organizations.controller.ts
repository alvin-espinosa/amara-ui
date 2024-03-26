import { Controller, Get, Post, Body, UseGuards  } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationsService } from './organizations.service';
import { AuthorizationGuard } from 'apps/amara-api/src/core/authorization/authorization.guard';

@Controller('organizations')
export class OrganizationsController {

  constructor(public organizationsService: OrganizationsService) { }

  @Get()
  @UseGuards(AuthorizationGuard)
  getData() {
    return this.organizationsService.getAll();
  }

  @Post()
  createOrganization(
    @Body() request: CreateOrganizationDto,
  ) {
    return this.organizationsService.create(request);
  }

}
