export const storeTemplatedCards = (_: unknown, __: unknown, ctx: Context) => {
  const {
    clients: { sanity },
  } = ctx;

  return sanity.storeTemplatedCards();
};
