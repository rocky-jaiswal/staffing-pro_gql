import fetch from 'node-fetch'

import { GraphQLContext } from '../../../types'
import { AuthModule } from '../generated-types/module-types'

const resolvers: AuthModule.Resolvers = {
  Query: {
    async getGoogleAuthUrl(_root: unknown, _args: unknown, _context: GraphQLContext) {
      // eslint-disable-next-line dot-notation
      const response = await fetch(`${process.env['AUTH_SERVER_URL']}/login/google`, {
        method: 'get',
        redirect: 'manual'
      })
      const headers = response.headers as any
      return headers.get('location')
    }
  }
}

export default resolvers
