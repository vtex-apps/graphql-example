import type { ClientsConfig, ServiceContext } from '@vtex/api';
import { LRUCache, Service } from '@vtex/api';

import { Clients } from './clients';
import { storeTemplatedCards } from './resolvers/storeTemplatedCards';

const MEDIUM_TIMEOUT_MS = 2 * 1000;

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>;
}

const memoryCache = new LRUCache<string, any>({ max: 5000 });

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: MEDIUM_TIMEOUT_MS,
    },
    // This key will be merged with the default options and add this cache to our Status client.
    status: {
      memoryCache,
    },
  },
};

// Export a service that defines resolvers and clients' options
export default new Service({
  clients,
  graphql: {
    resolvers: {
      Query: {
        storeTemplatedCards,
      },
    },
  },
});
