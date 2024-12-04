import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_APOLLO_GRAPHQ_ENDPOINT,
    credentials: process.env.REACT_APP_APOLLO_CREDENTIALS,
  }),
  cache: new InMemoryCache(),
});
