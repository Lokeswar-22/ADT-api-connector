import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  Requester: string;

  @IsString()
  @IsNotEmpty()
  Subject: string;

  @IsString()
  @IsNotEmpty()
  Type: string;

  @IsString()
  @IsNotEmpty()
  Site: string;

  @IsString()
  @IsNotEmpty()
  Priority: string;
}
