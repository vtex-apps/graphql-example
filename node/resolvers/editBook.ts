import { BookInput } from '../typings/custom'

interface EditBookArg {
  id: string
  book: BookInput
}

export const editBook = (
  _: any,
  { id, book }: EditBookArg,
  { clients: { book: booksClient } }: Context
) => booksClient.editBook(id, book)
