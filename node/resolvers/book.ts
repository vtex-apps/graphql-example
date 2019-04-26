export const book = async (
  _: any,
  { id }: { id: string },
  { clients: { book: bookClient } }: Context
) => bookClient.book(id)
