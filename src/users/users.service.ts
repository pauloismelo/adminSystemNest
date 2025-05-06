import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {

    constructor(private readonly prisma: PrismaService) {}

    async getAll(){
        return await this.prisma.user.findMany();
    }

    async getOne(id: number){
        return await this.prisma.user.findUnique({
            where: {id}
        })
    }

    async create(userData: {}){
        return await this.prisma.user.create({
            data: userData
        })
    }

    async update(id: number, userData: {}){
        return await this.prisma.user.update({
            where: {id},
            data: userData
        })
    }

    async delete(id: number){
        return await this.prisma.user.delete({
            where: {id}
        })
    }

}
