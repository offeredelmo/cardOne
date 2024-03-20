import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { DeckService } from './deck.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  create(@Body() createDeckDto: CreateDeckDto) {
    return this.deckService.create(createDeckDto);
  }

  @Get()
  findAll() {
    return this.deckService.findAll();
  }


  @Patch(':id')
  updateTitle(@Param('id') id: string, @Body() updateDeckDto: UpdateDeckDto) {
    return this.deckService.updateTitle(id, updateDeckDto);
  }

  @Patch('/favorite/:id')
  favorite(@Param('id', ParseUUIDPipe) id: string) {
    return this.deckService.favorite(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.deckService.remove(id);
  }
}
