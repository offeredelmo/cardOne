import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { Deck } from 'src/deck/entities/deck.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository:Repository<Card>,
    
    @InjectRepository(Deck)
    private readonly deckRepository: Repository<Deck>
  ){}


  async create(id:string, createCardDto: CreateCardDto) {
    const deck = await this.deckRepository.findOneBy({id_deck:id})
    if(!deck){
      return new BadRequestException(`Deck with ID ${id} not found`)
    }

    const card = await this.cardRepository.create(createCardDto)
    card.deck = deck

    return await this.cardRepository.save(card)
  }


  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  async update(id: string, updateCardDto: UpdateCardDto) {
    const card = await this.cardRepository.preload({id_card:id, ...updateCardDto})

    if (!card) {
      throw new BadRequestException(`Card with ID ${id} not found`);
    }
    return await this.cardRepository.save(card)
  }

  async remove(id: string) {
    const card = await this.cardRepository.findOneBy({id_card:id})
    if (!card) {
      throw new BadRequestException(`Card with ID ${id} not found`);
    }
    return await this.cardRepository.remove(card)
  }
}
