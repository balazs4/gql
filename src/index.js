import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const client = new ApolloClient({
  clientState: {
    connectToDevTools: true,
    defaults: {
      myapp: {
        __typename: 'MyApp',
        counter: 0
      }
    },
    resolvers: {
      Mutation: {
        increment: (_, __, { cache }) => {
          const current = cache.readQuery({
            query: gql`
              query {
                myapp @client {
                  counter
                }
              }
            `
          });

          cache.writeData({
            data: {
              myapp: {
                __typename: 'MyApp',
                counter: current.myapp.counter + 1
              }
            }
          });
          return null;
        }
      }
    }
  }
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
