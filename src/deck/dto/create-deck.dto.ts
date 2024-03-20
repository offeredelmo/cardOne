import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


export class CreateDeckDto {
    @IsNotEmpty()
    @IsString()
    title:string
}
