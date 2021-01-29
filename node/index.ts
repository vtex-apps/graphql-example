import { RecorderState, Service, IOClients, ServiceContext } from '@vtex/api'

import { Clients } from './clients'
import { updateSession } from './resolvers/updateSession'
import { session } from './resolvers/session'

const MEDIUM_TIMEOUT_MS = 2 * 1000

export default new Service<IOClients, RecorderState, ServiceContext<Clients>>({
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
      Session: {
        __resolveType(obj) {
          if (obj.type) {
            return 'SessionError'
          }

          return 'SessionSuccess'
        },
      },
      Mutation: {
        updateSession,
      },
      Query: {
        session,
      },
    },
  },
})
