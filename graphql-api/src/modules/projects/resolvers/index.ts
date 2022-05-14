import { GraphQLContext } from '../../../types'
import { ProjectsModule } from '../generated-types/module-types'

const resolvers: ProjectsModule.Resolvers = {
  Query: {
    async getAllProjects(_root: unknown, _args: unknown, _context: GraphQLContext) {
      return []
    }
  }
}

export default resolvers
