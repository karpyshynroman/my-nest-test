import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import {ObjectType, Field} from "@nestjs/graphql"
import {PetEntity} from "../pet/pet.entity";

@Entity('user')
@ObjectType()
export class UserEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid') id: string;

  @Field()
  @Column() email: string;

  @Field()
  @Column() password: string;

  @Field()
  @Column() fullName: string;

  @Field()
  @Column() phoneNumber: string;

  @Field(() => [PetEntity])
  @OneToMany(() => PetEntity, pet => pet.user)
  pets: PetEntity[];

  @Field()
  @CreateDateColumn() createdAt: Date;

  @Field()
  @UpdateDateColumn() updatedAt: Date;

}
