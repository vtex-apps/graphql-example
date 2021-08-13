interface Args {
  from: number
  to: number
}

export const books = (
  _: any,
  args: Args,
  { clients: { book: booksClient } }: Context
) => booksClient.books(args)
