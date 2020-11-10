import {BadRequestException, Injectable, UnprocessableEntityException} from '@nestjs/common';
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateUserDto, UpdateUserDto} from "./user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {
  }

  async getAllUsers() {
    return await this.usersRepository.find({relations: ["pets"]});
  }

  async getUserById(id: string) {
    const user = await this.usersRepository.findOne({where: {id}, relations: ["pets"]});
    if (!user)
      throw new BadRequestException('User with such id not found');
    return user
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUserInstance = await this.usersRepository.create(createUserDto);
    const userExists = await this.usersRepository.findOne({
      where: {
        email: newUserInstance.email
      }
    });
    if (userExists)
      throw new BadRequestException('User already exists');
    return await this.usersRepository.save(newUserInstance);
  }

  async updateUserById(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({where: {id}, relations: ["pets"]});
    if (!user)
      throw new BadRequestException('User with such id not found');
    return await this.usersRepository.save({
      ...user, ...updateUserDto
    })
  }
}
