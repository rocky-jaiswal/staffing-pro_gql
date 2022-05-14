import fetch from 'node-fetch'
import {
  CreateDbSignUpMutationVariables,
  CreateGoogleUserMutationVariables,
  CreateSessionMutationVariables
} from '../../../generated/graphql-client'

import { GraphQLContext } from '../../../types'
import { AuthModule } from '../generated-types/module-types'
import { AUTH_SERVER_URL } from '../../../constants'

const resolvers: AuthModule.Resolvers = {
  Query: {
    async getGoogleAuthUrl(_root: unknown, _args: unknown, _context: GraphQLContext) {
      const response = await fetch(`${AUTH_SERVER_URL}/login/google`, {
        method: 'get',
        redirect: 'manual'
      })
      const headers = response.headers as any
      return headers.get('location')
    }
  },
  Mutation: {
    async createGoogleUser(
      _root: unknown,
      args: CreateGoogleUserMutationVariables,
      _context: GraphQLContext
    ) {
      const response = await fetch(`${AUTH_SERVER_URL}/v1/login/google`, {
        method: 'post',
        body: JSON.stringify({ code: args.input }),
        headers: { 'Content-Type': 'application/json' }
      })
      const responseBody = (await response.json()) as any
      return responseBody.token
    },
    async createDBSignUp(
      _root: unknown,
      args: CreateDbSignUpMutationVariables,
      _context: GraphQLContext
    ) {
      const response = await fetch(`${AUTH_SERVER_URL}/v1/users`, {
        method: 'post',
        body: JSON.stringify(args.input),
        headers: { 'Content-Type': 'application/json' }
      })
      const responseBody = (await response.json()) as any
      return responseBody.token
    },
    async createSession(
      _root: unknown,
      args: CreateSessionMutationVariables,
      _context: GraphQLContext
    ) {
      const response = await fetch(`${AUTH_SERVER_URL}/v1/sessions`, {
        method: 'post',
        body: JSON.stringify(args.input),
        headers: { 'Content-Type': 'application/json' }
      })
      const responseBody = (await response.json()) as any
      return responseBody.token
    }
  }
}

export default resolvers
