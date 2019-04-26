interface Args {
  id: string
}

export const deleteBook = (_: any, { id }: Args, { clients: { book: booksClient } }: Context) =>
  booksClient.delete(id)
