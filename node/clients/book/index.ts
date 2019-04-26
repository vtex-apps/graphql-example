import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'
import { find, findIndex, propEq } from 'ramda'

import { Book, BookInput, Maybe } from '../../typings/custom'
import mock from './mock'

export class BookClient extends ExternalClient {
  private db = mock

  constructor (context: IOContext, options?: InstanceOptions) {
    super('http://example.com', context, options)
  }

  public book = (id: string) => find(propEq('id', id), this.db)

  public books = ({ from, to }: { from: number; to: number }) =>
    this.db.slice(Math.max(from, 0), Math.min(to, this.db.length))

  public delete = (id: string) => {
    const foundIndex = findIndex(propEq('id', id), this.db)

    if (foundIndex >= 0 && foundIndex < this.db.length) {
      const newDb = [...this.db.slice(0, foundIndex), ...this.db.slice(foundIndex + 1)]

      this.db = newDb

      return true
    }

    return false
  }

  public editBook = (id: string, book: BookInput): Maybe<Book> => {
    const foundIndex = findIndex(propEq('id', id), this.db)

    if (foundIndex >= 0 && foundIndex < this.db.length) {
      const foundBook = this.db[foundIndex]

      this.db[foundIndex] = { ...foundBook, ...book }

      return this.db[foundIndex]
    }
  }

  public newBook = (book: BookInput): Book => {
    const newBook = {
      ...book,
      id: this.db.length.toString(),
    }

    const newDb = [newBook, ...this.db]

    this.db = newDb

    return newBook
  }

  public total = () => this.db.length
}
