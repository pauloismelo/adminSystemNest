import {  Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { PrismaService } from "src/prisma/prisma.service";

import { signInDto } from "./dto/signin.dto";


@Injectable()
export class AuthService {

    constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) {}

    async signIn(params: signInDto): Promise<{access_token:string}>{
        const user = await this.prisma.user.findUnique({
            where: {
                email: params.email
            }
        });
        if (!user) throw new UnauthorizedException('User not found');

        if (!user.password) throw new UnauthorizedException('Password not set');
        const passwordMatch = await bcrypt.compare(params.password, user.password);
        if(!passwordMatch) throw new UnauthorizedException('Invalid password');

        const payload = {sub: user.id}
        return{
            access_token: await this.jwt.signAsync(payload),
        }
    }


}