import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}


  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  async findOneByEmail(email:string) {
    return this.userRepository.findOneBy({email})
  }

  async findOneById(id:string) {
    return this.userRepository.findOneBy({id_user: id})
  }

  async findOneByEmailWhitPassword(email:string){
    return this.userRepository.findOne({
      where: {email},
      select: ["id_user","email","password","role"]
    })
  }

}
