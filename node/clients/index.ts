import { IOClients } from '@vtex/api'

import { MasterData } from './masterdata'

export class Clients extends IOClients {
  get masterData() {
    return this.getOrSet('masterData', MasterData)
  }
}
