import { GraphQLContext } from '../../../types'
import { ProjectsModule } from '../generated-types/module-types'

const resolvers: ProjectsModule.Resolvers = {
  Query: {
    async getAllGeographies(_root: unknown, _args: unknown, context: GraphQLContext) {
      const records = await context.prisma.geography.findMany()
      return records.map((record) => record.name)
    }
  }
}

export default resolvers
