import type { BookInput } from '../typings/custom'

interface Args {
  book: BookInput
}

export const newBook = (
  _: any,
  { book }: Args,
  { clients: { book: booksClient } }: Context
) => booksClient.newBook(book)
