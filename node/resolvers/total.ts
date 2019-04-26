export const total = (_: any, __: any, { clients: { book: booksClient } }: Context) =>
  booksClient.total()
