import { ServiceContext } from '@vtex/api'

import { Clients } from '../clients'
import { getSessionToken } from '../modules/sessionToken'

export const VTEX_SESSION = 'vtex_session'

export async function session(
  _: any,
  _args: any,
  context: ServiceContext<Clients>
) {
  const {
    clients: { customSession },
  } = context

  const sessionCookie = getSessionToken(context.cookies)

  const { sessionData } = await customSession.getSession(sessionCookie)

  return sessionData
}
