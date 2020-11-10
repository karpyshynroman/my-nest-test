import {IsEmail, IsOptional, IsString, MaxLength, MinLength} from "class-validator";
import {ObjectType, Field, InputType} from "@nestjs/graphql"

@ObjectType()
export class MessageDto {

  @Field()
  message: string;

}

@InputType()
export class InputMessageDto {

  @Field()
  @MaxLength(100)
  message: string;

}
