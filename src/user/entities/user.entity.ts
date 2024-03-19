import { Role } from "src/common/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column()
    name:string;

    @Column({
        type:'text',
        unique:true
    })
    email:string;

    @Column({
        type:"text",
        nullable:false,
        select:false
    })
    password:string
    
    @Column({
        type: "enum",
        enum: Role,
        nullable: false
    })
    role: Role
    
    @Column({
        type:"boolean",
        default: false,        
    })
    email_confirmed:boolean;
}
