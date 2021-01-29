import { QueryHookOptions, useLazyQuery } from 'react-apollo'

import type { Session } from './SessionTypes'
import SessionQuery from './graphql/session.graphql'

interface Data {
  session: Session
}

function useLazyFullSession(options?: QueryHookOptions<Data>) {
  return useLazyQuery<Data>(SessionQuery, options)
}

export default useLazyFullSession
