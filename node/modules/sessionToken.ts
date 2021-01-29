import { ResolverError, ServiceContext } from '@vtex/api'

export const VTEX_SESSION = 'vtex_session'

export function getSessionToken(cookies: ServiceContext['cookies']) {
  const sessionCookie = cookies.get(VTEX_SESSION)

  if (sessionCookie === undefined)
    throw new ResolverError(
      `Invalid request for session, the ${VTEX_SESSION} wasn't provided!`
    )

  return sessionCookie
}
