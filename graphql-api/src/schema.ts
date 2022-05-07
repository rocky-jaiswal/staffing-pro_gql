import { createApplication } from 'graphql-modules'

import { authModule } from './modules/auth/authModule'

const application = createApplication({
  modules: [authModule]
})

export const schema = application.createSchemaForApollo()
