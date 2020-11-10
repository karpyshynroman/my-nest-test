import {Resolver, Query, Args, Context, Mutation, Subscription} from "@nestjs/graphql"
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";
import {CreateUserDto, UpdateUserDto} from "./user.dto";
import {PubSubEngine} from 'graphql-subscriptions';
import {Inject} from '@nestjs/common';
import {InputMessageDto, MessageDto} from "../message/message.dto";

const EVENT_MESSAGE_TRIGGER = 'EVENT_MESSAGE_TRIGGER';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
    @Inject('PUB_SUB') private pubSub: PubSubEngine
  ) {
  }

  @Query(() => [UserEntity])
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Query(() => UserEntity)
  async getUserById(
    @Args('id') id: string)
    : Promise<UserEntity> {
    return await this.userService.getUserById(id);
  }

  @Mutation(() => UserEntity)
  async updateUserById(
    @Args('id') id: string,
    @Args('inputs') inputs: UpdateUserDto,
  )
    : Promise<UserEntity> {
    return await this.userService.updateUserById(id, inputs)
  }

  @Mutation(() => UserEntity)
  async createUser(@Args('inputs') inputs: CreateUserDto)
    : Promise<UserEntity> {
    return await this.userService.createUser(inputs)
  }

  @Mutation(() => MessageDto)
  async sendMessage(@Args('message') message: InputMessageDto) {
    await this.pubSub.publish(EVENT_MESSAGE_TRIGGER, {['messages']: message});
    return await message;
  }

  @Subscription(() => MessageDto)
  async messages() {
    return await this.pubSub.asyncIterator(EVENT_MESSAGE_TRIGGER);
  }
}
