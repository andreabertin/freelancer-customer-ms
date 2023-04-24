import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CustomerResolver } from '@resolvers/customer.resolver';
import { CustomerService } from '@services/customer.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from '@configs/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig] }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // uses Apollo
      autoSchemaFile: true, // schema generated in memory
      subscriptions: {
        'graphql-ws': true, // enables graphql-ws package for subscriptions
      },
    }),
  ],
  providers: [CustomerResolver, CustomerService],
})
export class AppModule {}
