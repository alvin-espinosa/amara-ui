import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';

@Injectable()
export class OrganizationsService {

  // constructor() { }

  getAll() {
    return { message: 'get all organizations!' };
  }

  create(request: CreateOrganizationDto) {
    return request;
  }
}
