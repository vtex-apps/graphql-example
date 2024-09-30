export const footer = (_: unknown, __: unknown, ctx: Context) => {
  const {
    clients: { sanity },
  } = ctx;

  return sanity.footer();
};
