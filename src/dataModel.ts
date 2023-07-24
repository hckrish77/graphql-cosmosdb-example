// src/cosmosDataModel.ts
export interface CosmosData {
    supplyData: {
      id: string;
      region: string;
      field: {
        shortdesc: string;
        longdesc: string;
        scope: string;
        value: string | number | boolean | null; // Adjust the types based on your actual data types
      }[];
    };
    id: string;
    _rid: string;
    _self: string;
    _etag: string;
    _attachments: string;
    _ts: number;
  }
  