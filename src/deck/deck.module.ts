import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deck } from './entities/deck.entity';

@Module({
  controllers: [DeckController],
  providers: [DeckService],
  imports:[
    TypeOrmModule.forFeature([Deck])
  ]
})
export class DeckModule {}
