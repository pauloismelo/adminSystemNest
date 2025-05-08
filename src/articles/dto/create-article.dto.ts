import { IsNumber, IsString } from "class-validator"


export class CreateArticleDto {
    @IsString()
    title:      string

    @IsString()
    content:    string

    @IsString()
    status:     string

    @IsString()
    file:       string

    @IsNumber()
    userId:     number

    @IsNumber()
    categoryId: number
}
