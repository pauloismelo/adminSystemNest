import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createCategoriesDto } from './dto/createCategories.dto';

@Injectable()
export class CategoriesService {

    constructor(private readonly prisma:PrismaService){}

    async createCategory(body: createCategoriesDto){

        if(!body) throw new UnauthorizedException('Body is required')
        return await this.prisma.category.create({
            data: body
        });
    }

    async getAllCategories(){
        return await this.prisma.category.findMany({})
    }

    async getCategoryById(id: number){
        if (!id) throw new UnauthorizedException('Id is required')

        return await this.prisma.category.findUnique({where: {id}})
    }

    async updateCategory(id: number, body: createCategoriesDto){
        if (!id) throw new UnauthorizedException('Id is required')

            return await this.prisma.category.update({
                where: {id},
                data: body
            })
    }

    async deleteCategory(id: number){
        if (!id) throw new UnauthorizedException('Id is required');

        return await this.prisma.category.delete({where:{id}})
    }

}
