import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Repository } from 'typeorm';
import { Deck } from './entities/deck.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeckService {

  constructor(
    @InjectRepository(Deck)
    private readonly deckRepository: Repository<Deck>
  ) { }



  async create(createDeckDto: CreateDeckDto) {

    const newDeck = this.deckRepository.create(createDeckDto)
    return await this.deckRepository.save(newDeck)
  }

  async findAll() {
    const decks = await this.deckRepository.find({
      relations: {
        cards: true
      },
      order: {
        favorite: "DESC"
      }
    })
    return decks;
  }

  async updateTitle(id: string, updateDeckDto: UpdateDeckDto) {
    const deck = await this.deckRepository.preload({ id_deck: id, ...updateDeckDto })
    if (!deck) {
      throw new BadRequestException(`Deck with ID ${id} not found`);
    }
    console.log(deck)
    return await this.deckRepository.save(deck)
  }

  async favorite(id: string) {
    const deck = await this.deckRepository.findOneBy({id_deck: id});

    if (!deck) {
      throw new BadRequestException(`Deck with ID ${id} not found`);
    }

    deck.favorite = !deck.favorite;

    return await this.deckRepository.save(deck)
  }

  async remove(id: string) {
    const deck = await this.deckRepository.findOneBy({id_deck:id})
    if (!deck) {
      throw new BadRequestException(`Deck with ID ${id} not found`);
    }  
    return await this.deckRepository.remove(deck);
  }
}
