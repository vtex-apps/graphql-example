import { useEffect, useState } from 'react'

import { Session } from './SessionTypes'

interface SessionState {
  loading: boolean
  session: Session | undefined
  error: boolean | undefined
}

function useRenderSession() {
  const [session, setSession] = useState<SessionState>({
    loading: true,
    session: undefined,
    error: undefined,
  })

  const sessionPromise = window?.__RENDER_8_SESSION__?.sessionPromise as
    | Promise<{
        response: Session
      }>
    | undefined

  useEffect(() => {
    if (!sessionPromise) {
      return
    }

    sessionPromise.then((sessionResponse) => {
      const { response } = sessionResponse

      setSession({
        loading: false,
        session: response,
        error: 'type' in response && 'message' in response,
      })
    })
  }, [sessionPromise])

  return session
}

export default useRenderSession
