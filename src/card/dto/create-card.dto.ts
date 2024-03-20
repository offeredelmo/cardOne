import { IsNotEmpty, IsString } from "class-validator";


export class CreateCardDto {

    @IsNotEmpty()
    @IsString()
    front:string


    @IsNotEmpty()
    @IsString()
    back:string

}
