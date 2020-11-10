import {IsEmail, isNotEmpty, IsNotEmpty, IsOptional, IsString, Min, MinLength} from 'class-validator';
import {ObjectType, Field, InputType} from "@nestjs/graphql"

@InputType()
export class CreateUserDto {

  @Field()
  @IsString()
  fullName: string;

  @Field()
  @IsEmail()
  @IsString()
  email: string;

  @Field({description: 'Password must be longer than or equal to 5 characters'})
  @MinLength(5)
  @IsString()
  password: string;

  @Field()
  @IsString()
  phoneNumber: string
}

@InputType()
export class UpdateUserDto {

  @IsOptional()
  @Field({nullable: true})
  @IsString()
  fullName?: string;

  @IsOptional()
  @Field({nullable: true})
  @IsEmail()
  @IsString()
  email?: string;

  @IsOptional()
  @Field({nullable: true, description: 'Password must be longer than or equal to 5 characters'})
  @MinLength(5)
  @IsString()
  password?: string;

  @IsOptional()
  @Field({nullable: true})
  @MinLength(5)
  @IsString()
  phoneNumber?: string
}

