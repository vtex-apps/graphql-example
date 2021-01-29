import { ServiceContext } from '@vtex/api'

import { Clients } from '../clients'
import { getSessionToken } from '../modules/sessionToken'

interface Args {
  fields: Array<{ name: string; value: string | number }>
}

export async function updateSession(
  _: any,
  { fields }: Args,
  context: ServiceContext<Clients>
) {
  const {
    clients: { customSession },
  } = context

  const sessionCookie = getSessionToken(context.cookies)

  await customSession.updateSession(fields, sessionCookie)

  const { sessionData } = await customSession.getSession(sessionCookie)

  return sessionData
}
