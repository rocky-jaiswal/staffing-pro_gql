import { PrismaClient } from '@prisma/client'
import type { IncomingMessage, ServerResponse } from 'http'
import { Logger } from 'pino'

export type UserType = {
  id?: string
  email?: string
}

export type GraphQLContext = {
  request: IncomingMessage
  res: ServerResponse
  logger: Logger
  currentUser: UserType
  prisma: PrismaClient
}
