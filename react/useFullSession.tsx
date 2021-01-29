import { QueryHookOptions, useQuery } from 'react-apollo'

import type { Session } from './SessionTypes'
import SessionQuery from './graphql/session.graphql'

interface Data {
  session: Session
}

function useFullSession(options?: Omit<QueryHookOptions<Data>, 'ssr'>) {
  return useQuery<Data>(SessionQuery, {
    ...options,
    ssr: false,
  })
}

export default useFullSession
