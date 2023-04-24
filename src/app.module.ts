import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CustomerResolver } from '@resolvers/customer.resolver';
import { CustomerService } from '@services/customer.service';

@Module({
  imports: [
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
