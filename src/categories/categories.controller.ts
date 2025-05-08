import { Controller, Post, Body, Get, Param, ParseIntPipe, Patch, Delete, UseGuards } from '@nestjs/common';
import { createCategoriesDto } from './dto/createCategories.dto';
import { CategoriesService } from './categories.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) {}

    @UseGuards(AuthGuard)
    @Post()
    async createCategory(@Body() body: createCategoriesDto) {
        return await this.categoriesService.createCategory(body); ;
    }

    @UseGuards(AuthGuard)
    @Get()
    async getAllCategories(){
        return await this,this.categoriesService.getAllCategories();
    }

    @UseGuards(AuthGuard)
    @Get('id')
    async getCategoryById(@Param('id', ParseIntPipe) id: number){
        return await this.categoriesService.getCategoryById(id);
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async updateCategory(@Param('id', ParseIntPipe) id : number, @Body() categoryData: createCategoriesDto){
        return await this.categoriesService.updateCategory(id, categoryData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteCategory(@Param('id', ParseIntPipe) id: number){
        return await this.categoriesService.deleteCategory(id);
    }   
}
