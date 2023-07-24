import { ApolloServer, gql } from 'apollo-server';

// Your GraphQL schema, this defines the types and operations for your API
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Root resolver, this defines the resolver functions for the API operations
const resolvers = {
  Query: {
    hello: () => 'Hello, Apollo Server with TypeScript!',
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`Apollo Server running at ${url}`);
});
