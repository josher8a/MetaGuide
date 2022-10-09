import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
} from '@apollo/client/core';


const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};


export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_LENS_API,
  cache: new InMemoryCache(),
  defaultOptions,
});