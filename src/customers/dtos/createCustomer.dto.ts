import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, IsString, ValidateNested } from "class-validator";
import { pipe } from "rxjs";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto{

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumberString()
    id: number;

    @IsNotEmpty()
    name: string;

    @ValidateNested()
    @Type(() => CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}