import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from './decorators/roles.decorators';
import { RoleGuard } from './guard/role.guard';
import { Auth } from './decorators/auth.decorator';
import { Role } from 'src/common/role.enum';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}


    @Post('registerUser')
    registerUser(@Body() registerDto:RegisterDto){
        return this.authService.registerUser(registerDto)
    }

    @Post('login')
    login(@Body() loginDto: LoginDto ){
      return this.authService.login(loginDto);
    }
}
