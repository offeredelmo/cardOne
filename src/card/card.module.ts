import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { DeckService } from 'src/deck/deck.service';
import { DeckModule } from 'src/deck/deck.module';
import { Deck } from 'src/deck/entities/deck.entity';

@Module({
  controllers: [CardController],
  providers: [CardService],
  imports: [
    TypeOrmModule.forFeature([Card, Deck]),
  ]
})
export class CardModule {}
