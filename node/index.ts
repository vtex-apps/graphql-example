import { Service, ServiceContext } from '@vtex/api'
import { prop } from 'ramda'

import { Clients } from './clients'
import { mutations as reviewMutations, queries as reviewQueries } from './resolvers/review'

const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines resolvers and clients' options
export default new Service<Clients>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Mutation: {
        ...reviewMutations,
      },
      Query: {
        ...reviewQueries,
      },
      Review: {
        cacheId: prop('id'),
      },
    },
  },
})
