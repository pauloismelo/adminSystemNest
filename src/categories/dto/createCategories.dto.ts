import { IsNotEmpty, IsString } from "class-validator";

export class createCategoriesDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    status: string;
}