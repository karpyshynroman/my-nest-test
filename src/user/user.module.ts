import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserService} from './user.service';
import {UserEntity} from "./user.entity";
import {UserResolver} from "./user.resolver";
import {PubSub} from "graphql-subscriptions";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers:
    [
      UserService, UserResolver,
      {
        provide: 'PUB_SUB',
        useValue: new PubSub(),
      },
    ]
})
export class UserModule {
}
