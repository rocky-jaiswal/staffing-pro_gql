import * as Types from "../../../generated/graphql-client";
import * as gm from "graphql-modules";
export namespace AuthModule {
  interface DefinedFields {
    Query: 'getGoogleAuthUrl';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getGoogleAuthUrl?: gm.Middleware[];
    };
  };
}