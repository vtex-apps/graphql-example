import type { ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'
import { prop } from 'ramda'

import { Clients } from './clients'
import { book } from './resolvers/book'
import { books } from './resolvers/books'
import { deleteBook } from './resolvers/delete'
import { editBook } from './resolvers/editBook'
import { newBook } from './resolvers/newBook'
import { source } from './resolvers/source'
import { total } from './resolvers/total'

const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines resolvers and clients' options
export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Book: {
        cacheId: prop('id'),
      },
      Mutation: {
        delete: deleteBook,
        editBook,
        newBook,
      },
      Query: {
        book,
        books,
        source,
        total,
      },
    },
  },
})
