import { createApplication } from 'graphql-modules'

import { authModule } from './modules/auth/authModule'
import { projectsModule } from './modules/projects/projectsModule'

const application = createApplication({
  modules: [authModule, projectsModule]
})

export const schema = application.createSchemaForApollo()
