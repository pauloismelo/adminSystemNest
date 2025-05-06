import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    getAll(){
        return '';
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return '';
    }

    @Post()
    create(@Body() userData: {}){
        return '';
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() userData: {}){
        return '';
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return '';
    }

}

