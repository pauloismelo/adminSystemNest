import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "./auth.guard";

@Module({
    imports: [PrismaModule,
        JwtModule.register({
            global: true,
            secret: process.env.SECRET_KEY || '',
            signOptions: {
                expiresIn: '3600s',
            },
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard],
    exports: [AuthGuard],
})
export class AuthModule {}