import { IOClients } from '@vtex/api'

import { Session } from './session'

export class Clients extends IOClients {
  public get customSession() {
    return this.getOrSet('customSession', Session)
  }
}
