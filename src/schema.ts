import { gql } from "apollo-server";

const typeDefs = gql`
  type Field {
    shortdesc: String!
    longdesc: String!
    scope: String!
    value: String
  }

  type SupplyData {
    id: String!
    region: String!
    field: [Field!]!
  }

  type CosmosData {
    supplyData: SupplyData!
    id: String!
    _rid: String!
    _self: String!
    _etag: String!
    _attachments: String!
    _ts: Float!
  }

  type Query {
    getCosmosData(id: String!): CosmosData
    # Add other queries as needed
  }
`;

export default typeDefs;
