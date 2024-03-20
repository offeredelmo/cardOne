import { Deck } from "src/deck/entities/deck.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Card {

    @PrimaryGeneratedColumn("uuid")
    id_card:string

    @Column()
    front:string

    @Column()
    back:string

    @ManyToOne(() => Deck, (deck) => deck.cards)
    deck: Deck
}
