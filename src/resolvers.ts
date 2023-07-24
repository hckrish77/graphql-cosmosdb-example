// src/resolvers.ts
import { CosmosData } from "./dataModel";
import { getBookById } from "./cosmosdb"; // Replace this with your actual function to get data from Cosmos DB

const resolvers = {
  Query: {
    getCosmosData: (_, { id }: { id: string }): CosmosData | null => {
      // Implement your function to get data from Cosmos DB using the provided id
      // You can use the 'getBookById' function from 'cosmosdb.ts' or any other method that retrieves data from Cosmos DB
      const cosmosData = getBookById(id);

      if (cosmosData) {
        return cosmosData;
      }

      return null;
    },
  },
};

export default resolvers;
