// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { OrganizationStatus } from '../../organizations/organization-status.enum';
// import { Site } from 'src/_database/entities/site.entity';

// @Entity()
// export class Organization {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column()
//   status: OrganizationStatus;

//   @OneToMany(type => Site, s => s.organization)
//   sites: Site[];

//   constructor(organization: Partial<Organization>) {
//     Object.assign(this, organization);
//   }
// }
