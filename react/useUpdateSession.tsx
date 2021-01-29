import { useCallback } from 'react'
import {
  MutationFunctionOptions,
  QueryHookOptions,
  useMutation,
} from 'react-apollo'

import UpdateSesionMutation from './graphql/updateSession.graphql'
import type { Session } from './SessionTypes'

interface Data {
  udpateSession: Session
}

interface Variables {
  fields: Record<string, string | number>
}

function useUpdateSession(options?: QueryHookOptions<Data, Variables>) {
  const [updateSessionMutation] = useMutation<Data, Variables>(
    UpdateSesionMutation,
    options
  )

  const updateSession = useCallback(
    async (mutationOptions: MutationFunctionOptions<Data, Variables>) => {
      await updateSessionMutation(mutationOptions)
      window.location.reload()

      // Holds promise until page reload
      return new Promise(() => {})
    },
    [updateSessionMutation]
  )

  return updateSession
}

export default useUpdateSession
