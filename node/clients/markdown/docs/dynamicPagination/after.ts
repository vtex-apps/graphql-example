export default `
  The most important components in this example are the \`DeleteButton\` and \`NewElement\`, that handle deletion and creation of a list element respectively.

  Their code is really similar and takes advantage of the React Apollo Mutation's \`update\` method for updating the list in Apollo Client's InMemory cache.

  Basically, the these components make the deletion/creation mutation. In case of the mutation completing successfully, the book list is updated in the cache, removing or adding the altered element.

  When going back to the list view. The pagination component will render the list with the correct mutation applied and the element will be created/deleted.
`
