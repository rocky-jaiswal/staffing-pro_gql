import { createModule } from 'graphql-modules'
import { loadFilesSync } from '@graphql-tools/load-files'
import { join } from 'path'

export const projectsModule = createModule({
  id: 'projects-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, './schema/*.graphql')),
  resolvers: loadFilesSync(join(__dirname, './resolvers/index.ts'))
})
