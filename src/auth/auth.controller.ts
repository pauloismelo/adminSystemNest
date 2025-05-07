import { Controller, Body, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { Prisma } from "generated/prisma";

import { AuthService } from "./auth.service";
import { signInDto } from "./dto/signin.dto";


@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService) {}

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() body: signInDto){
        return this.AuthService.signIn(body);
    }

}