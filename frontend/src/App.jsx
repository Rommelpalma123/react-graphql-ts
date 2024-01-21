import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ServerProvider } from './context/ServerContext';
import { RouterManager } from './routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/clientGraphql';

export const App = () => (
  <AuthProvider>
    <ServerProvider>
      <ApolloProvider client={client}>
        <RouterManager />
      </ApolloProvider>
    </ServerProvider>
  </AuthProvider>
);
