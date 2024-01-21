import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://banco-q8so.onrender.com/graphql',
  cache: new InMemoryCache(),
});
