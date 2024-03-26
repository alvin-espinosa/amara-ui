import { IsEnum, IsNotEmpty } from 'class-validator';
import { CommonStatus } from 'libs/shared/src/lib/enums/common-status.enum';

export class CreateOrganizationDto {
  @IsNotEmpty()
  name: string;

  @IsEnum(CommonStatus)
  status: CommonStatus;
}
