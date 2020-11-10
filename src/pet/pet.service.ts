import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {PetEntity} from "./pet.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private petRepository: Repository<PetEntity>,
  ) {
  }
}
