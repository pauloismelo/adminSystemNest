import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { createUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @UseGuards(AuthGuard)   
    @Get()
    getAll(){
        return this.userService.getAll();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.getOne(id);
    }

    @Post()
    create(@Body() userData: createUserDto){
        return this.userService.create(userData);
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() userData: createUserDto){
        return this.userService.update(id, userData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id);
    }

}

