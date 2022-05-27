import * as Types from '../../../generated/graphql-client'
import * as gm from 'graphql-modules'
export namespace AuthModule {
  interface DefinedFields {
    Query: 'getGoogleAuthUrl'
    Mutation: 'createGoogleUser' | 'createDBSignUp' | 'createSession'
  }

  interface DefinedInputFields {
    DbSignUpInput: 'email' | 'password' | 'confirmedPassword'
    SessionInput: 'email' | 'password'
  }

  export type DbSignUpInput = Pick<Types.DbSignUpInput, DefinedInputFields['DbSignUpInput']>
  export type SessionInput = Pick<Types.SessionInput, DefinedInputFields['SessionInput']>
  export type Query = Pick<Types.Query, DefinedFields['Query']>
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>

  export interface Resolvers {
    Query?: QueryResolvers
    Mutation?: MutationResolvers
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[]
    }
    Query?: {
      '*'?: gm.Middleware[]
      getGoogleAuthUrl?: gm.Middleware[]
    }
    Mutation?: {
      '*'?: gm.Middleware[]
      createGoogleUser?: gm.Middleware[]
      createDBSignUp?: gm.Middleware[]
      createSession?: gm.Middleware[]
    }
  }
}
