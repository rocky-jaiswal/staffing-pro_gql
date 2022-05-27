import 'dotenv/config'
import pino from 'pino'

import { createServer } from '@graphql-yoga/node'
import { useGenericAuth } from '@envelop/generic-auth'
import { useDepthLimit } from '@envelop/depth-limit'
import { PrismaClient } from '@prisma/client'

import { schema } from './schema'
import resolveUserFn from './plugins/authResolverUserFn'

const prisma = new PrismaClient()

const logger = pino()

const main = async () => {
  const server = createServer({
    schema,
    plugins: [
      useGenericAuth({
        resolveUserFn,
        mode: 'protect-all'
      }),
      useDepthLimit({
        maxDepth: 5
      })
    ],
    context: (/* { req }: { req: IncomingMessage } */) => {
      // TODO: You can check for any headers here
      return { logger, prisma }
    }
  })
  await server.start()
}

main()
