import { IsNotEmpty } from 'class-validator';

export class CreateTripDto {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public user: string;
}
