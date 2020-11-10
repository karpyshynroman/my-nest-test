import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {ObjectType, Field} from "@nestjs/graphql"
import {UserEntity} from "../user/user.entity";

@Entity('pet')
@ObjectType()
export class PetEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid') id: string;

  @Field()
  @Column() name: string;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, user => user.pets)
  user: UserEntity;

  @Field()
  @CreateDateColumn() createdAt: Date;

  @Field()
  @UpdateDateColumn() updatedAt: Date;

}
