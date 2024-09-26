import { IOClients } from '@vtex/api';

import { BookClient } from './book';
import { MarkdownClient } from './markdown';
import { SanityClient } from './sanity';

export class Clients extends IOClients {
  public get book() {
    return this.getOrSet('book', BookClient);
  }

  public get markdown() {
    return this.getOrSet('markdown', MarkdownClient);
  }

  public get sanity() {
    return this.getOrSet('sanity', SanityClient);
  }
}
