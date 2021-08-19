interface Args {
  id: string
}

export const source = (
  _: any,
  { id }: Args,
  { clients: { markdown } }: Context
) => markdown.get(id)
