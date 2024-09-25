/* eslint-disable @typescript-eslint/no-explicit-any */
export const storeTemplatedCards = (_: any, { clients: { sanity } }: Context) =>
  sanity.storeTemplatedCards()
