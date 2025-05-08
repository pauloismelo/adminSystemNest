import { Controller, Post, Body, Get, Param, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { createCategoriesDto } from './dto/createCategories.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    async createCategory(@Body() body: createCategoriesDto) {
        return await this.categoriesService.createCategory(body); ;
    }

    @Get()
    async getAllCategories(){
        return await this,this.categoriesService.getAllCategories();
    }

    @Get('id')
    async getCategoryById(@Param('id', ParseIntPipe) id: number){
        return await this.categoriesService.getCategoryById(id);
    }

    @Patch(':id')
    async updateCategory(@Param('id', ParseIntPipe) id : number, @Body() categoryData: createCategoriesDto){
        return await this.categoriesService.updateCategory(id, categoryData);
    }

    @Delete(':id')
    async deleteCategory(@Param('id', ParseIntPipe) id: number){
        return await this.categoriesService.deleteCategory(id);
    }   
}
