import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import mock from './mock'

export class MarkdownClient extends ExternalClient {
  private db = mock

  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://example.com', context, options)
  }

  public get = (id: string) => this.db[id]
}
