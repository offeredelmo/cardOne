import { PartialType } from '@nestjs/mapped-types';
import { CreateDeckDto } from './create-deck.dto';
import { IsBoolean } from 'class-validator';

export class UpdateDeckDto extends PartialType(CreateDeckDto) {
}
