import * as Types from '../../../generated/graphql'
import * as gm from 'graphql-modules'
export namespace ProjectsModule {
  interface DefinedFields {
    Query: 'getAllProjects'
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>

  export interface Resolvers {
    Query?: QueryResolvers
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[]
    }
    Query?: {
      '*'?: gm.Middleware[]
      getAllProjects?: gm.Middleware[]
    }
  }
}
