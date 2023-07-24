import { ApolloServer, gql } from 'apollo-server';
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { getCosmosDataById } from "./cosmosdb";

// Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`Apollo Server running at ${url}`);
});

// Example query to fetch CosmosData by ID
const EXAMPLE_ID = "e8cdd0cb-22fa-485e-a299-a528d9357b89";

//Uncomment the following block to test the query
server.executeOperation({
  query: `
    query GetCosmosData($id: String!) {
      getCosmosData(id: $id) {
        id
        region
        field {
          shortdesc
          longdesc
          scope
          value
        }
        _rid
        _self
        _etag
        _attachments
        _ts
      }
    }
  `,
  variables: { id: EXAMPLE_ID },
})
.then((result) => console.log("Example Query Result:", result.data))
.catch((error) => console.error("Example Query Error:", error));