import { Transform } from "class-transformer"
import { IsEmail, IsPhoneNumber, IsString } from "class-validator"

export class RegisterDto {
    @IsString()
    name:string


    @IsEmail()
    email:string


    @IsString()
    password:string

}