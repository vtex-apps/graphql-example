export default `
  The most important part of the pagination implementation is coded in the \`PaginationController\` component.

  The pagination starts by querying the total number of items and the first 5 items of the list.

  When the \`next page\` button is clicked, the same query used for listing the first 5 elements is reused with the [fetchMore](https://www.apollographql.com/docs/react/features/pagination.html#fetch-more) function. The \`fetchMore\` function will then make a new query, bringing 5 more elements.

  After the loading state is finished, the \`updateQuery\` function is run, updating the Apollo Client's InMemory cache and concatenating the result into a single list.
`
