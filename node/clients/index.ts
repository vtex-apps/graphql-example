import { IOClients } from '@vtex/api';

import { MarkdownClient } from './markdown';
import { SanityClient } from './sanity';

export class Clients extends IOClients {
  public get markdown() {
    return this.getOrSet('markdown', MarkdownClient);
  }

  public get sanity() {
    return this.getOrSet('sanity', SanityClient);
  }
}
