import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    getAll(){
        this.userService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.userService.getOne(id);
    }

    @Post()
    create(@Body() userData: {}){
        return this.userService.create(userData);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() userData: {}){
        return this.userService.update(id, userData);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.userService.delete(id);
    }

}

