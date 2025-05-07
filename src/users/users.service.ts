import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { createUserDto } from './dto/createUser.dto';


@Injectable()
export class UsersService {

    constructor(private readonly prisma: PrismaService) {}

    async getAll(){
        return await this.prisma.user.findMany();
    }

    async getOne(id: number){
        if (!id) throw new UnauthorizedException('User ID is required');
        return await this.prisma.user.findUnique({
            where: {id}
        })
    }

    async create(userData: createUserDto){
        if (!userData) throw new UnauthorizedException('User data is required');
        if (!userData['passworfd']) throw new UnauthorizedException('Password is required');

        const hash = await bcrypt.hash(userData['password'], 10);

        return this.prisma.user.create({
            data: {...userData, password: hash},
        });
    }

    async update(id: number, userData: createUserDto){
        if (!id) throw new UnauthorizedException('User ID is required');

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
