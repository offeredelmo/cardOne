import { Card } from "src/card/entities/card.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Deck {
    @PrimaryGeneratedColumn("uuid")
    id_deck:string


    @Column({
        type:"text"
    })
    title:string

    @Column({
        type:"boolean",
        default:false
    })
    favorite:boolean

    @OneToMany(() => Card, (card) => card.deck, {onDelete:"CASCADE"})
    cards: Card[]
    
}
