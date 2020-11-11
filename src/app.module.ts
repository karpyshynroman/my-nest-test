import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from './user/user.module';
import {GraphQLModule} from '@nestjs/graphql';
import {join} from 'path'
import {PetModule} from './pet/pet.module';
import {PubSub} from "graphql-subscriptions";

@Module({
  imports:
    [
      TypeOrmModule.forRoot(),
      GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'schema.gql'),
        installSubscriptionHandlers: true,
      }),
      UserModule,
      PetModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
