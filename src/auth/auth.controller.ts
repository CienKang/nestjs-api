import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginDto, registerDto } from "../dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        console.log('AuthController instantiated');
    }

    @Post('login')
    async login(@Body() body: loginDto) {
        return this.authService.login(body);
    }


    @Post('register')
    async register(@Body() body: registerDto) {
        return this.authService.register(body);
    }

}