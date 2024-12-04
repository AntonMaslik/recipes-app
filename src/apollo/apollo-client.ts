import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.APOLLO_GRAPHQ_ENDPOINT,
    credentials: process.env.APOLLO_CREDENTIALS,
  }),
  cache: new InMemoryCache(),
});

export default client;
