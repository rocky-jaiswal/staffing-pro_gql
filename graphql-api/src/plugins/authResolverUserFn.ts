import {
  ResolveUserFn
  // ValidateUserFn
} from '@envelop/generic-auth'
import { IncomingMessage } from 'http'
import fetch from 'node-fetch'

import { UserType } from '../types'
import { AUTH_SERVER_URL } from '../constants'

const getUserFromToken = async (token: string) => {
  const response = await fetch(`${AUTH_SERVER_URL}/v1/user`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      authorization: `token ${token}`
    }
  })
  const responseBody = (await response.json()) as any
  return responseBody
}

const resolveUserFn: ResolveUserFn<UserType> = async (context) => {
  // eslint-disable-next-line dot-notation
  const request = context['req'] as IncomingMessage
  const authHeader = request.headers.authorization as string
  if (authHeader) {
    // TODO: Handle failure here
    const userDetails = await getUserFromToken(authHeader)
    console.log(userDetails)
    return { id: userDetails.userId, email: userDetails.email }
  }
  return {}
}

export default resolveUserFn
