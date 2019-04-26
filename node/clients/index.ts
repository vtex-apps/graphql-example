import { IOClients } from '@vtex/api'

import { BookClient } from './book'
import { MarkdownClient } from './markdown'

export class Clients extends IOClients {
  get book() {
    return this.getOrSet('book', BookClient)
  }

  get markdown() {
    return this.getOrSet('markdown', MarkdownClient)
  }
}
