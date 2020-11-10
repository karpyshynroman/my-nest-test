import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import {PetEntity} from "./pet.entity";
import {UserEntity} from "../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity])],
  providers: [PetService, PetResolver]
})
export class PetModule {}
