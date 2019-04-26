export default `
  Cool! But how is it coded?

  The implementation can be seen in \`PreviewWithCachedData\` component.

  The main ideia is to use the book query's loading state as a switcher between using the cached data or reading from the incoming query data.

  If the query is in loading state, the function \`readFromApolloCache\` is executed. It reads a Fragment from the Apollo Client's InMemory cache and the renderization occurs as usual.

  One important hint is using the \`buildCacheLocator\` function exported by \`render\`. This function takes as input the app id, the type and id of the fragment,and generates the Apollo Client's InMemory cache ID of the object we want to read the fragment from.

  When the book's query finishes loading, its data is used for rendering the final component.
`
