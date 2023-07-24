// src/cosmosdb.ts
import { CosmosClient, ItemDefinition } from "@azure/cosmos";

// Cosmos DB configuration (replace with your actual credentials)
const endpoint = "YOUR_COSMOS_DB_ENDPOINT_URL";
const key = "YOUR_COSMOS_DB_AUTHORIZATION_KEY";
const databaseName = "YOUR_DATABASE_NAME";
const containerName = "YOUR_CONTAINER_NAME";

const cosmosClient = new CosmosClient({ endpoint, key });
const database = cosmosClient.database(databaseName);
const container = database.container(containerName);

interface Field {
  shortdesc: string;
  longdesc: string;
  scope: string;
  value: string | number | boolean | null; // Adjust the types based on your actual data types
}

interface SupplyData {
  id: string;
  region: string;
  field: Field[];
}

export interface CosmosData extends SupplyData {
  id: string;
  _rid: string;
  _self: string;
  _etag: string;
  _attachments: string;
  _ts: number;
}

export async function getCosmosDataById(id: string): Promise<CosmosData> {
  try {
    const { resource } = await container.item(id).read();
    return {
      ...resource.supplyData,
      id: resource.id,
      _rid: resource._rid,
      _self: resource._self,
      _etag: resource._etag,
      _attachments: resource._attachments,
      _ts: resource._ts,
    };
  } catch (error) {
    console.error("Error while fetching CosmosData from Cosmos DB:", error);
    throw new Error("Failed to fetch CosmosData from Cosmos DB.");
  }
}
