import { BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/common/role.enum';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UserService,
        private jwtService: JwtService
        ){}

    async registerUser({name, email, password}:RegisterDto){

        
        const user = await this.userService.findOneByEmail(email);
        

        if (user) {
            throw new BadRequestException('User already exists');
          }

        const newUser = await this.userService.create({
            name,
            email,
            password: await bcrypt.hash(password, 13),
            role: Role.USER
        })

        
        return await this.userService.create(newUser)
    }


    async login({email,password}:LoginDto){
        const user = await this.userService.findOneByEmailWhitPassword(email);

        if (!user) {
            throw new UnauthorizedException('is wrong');
          }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('is wrong');
        }

        const payload = { email: user.email, role: user.role};
        const token = await this.jwtService.signAsync(payload);

        return {
            token,
            email,
          };
    }
   

}
