import { PartialType } from "@nestjs/mapped-types";
import { createCategoriesDto } from "./createCategories.dto";

export class updateCategoriesDto extends PartialType(createCategoriesDto){}