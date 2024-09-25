import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { createClient } from '@sanity/client'
import type { ClientConfig } from '@sanity/client'

export class SanityClient extends ExternalClient {
  private config: ClientConfig = {
    projectId: 'mfaylecy',
    dataset: 'test',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-09-25', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  }

  private client = createClient(this.config)

  constructor(context: IOContext, options?: InstanceOptions) {
    super('', context, options)
  }

  public async storeTemplatedCards() {
    const cards = await this.client.fetch('*[_type == "storeTemplatedCard"]')

    return cards
  }
}
