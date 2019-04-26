export default `
  # Automatic Cache Updates

  In this example you will learn how to use
    [Automatic Cache Updates](https://www.apollographql.com/docs/react/advanced/caching.html#automatic-updates)

  Automatic Cache Updates let you update the Apollo Client's cache without any code!

  This example shows how this feature can be handy. It starts by querying a book list, which is shown by clicking in a row will take you to the detail page. The detail page allows you to edit the name and authors of a book. By clicking in save, a mutation will be made to the GraphQL API, mutating one SINGLE Book object. By click in the back button, the mutated book in the list will also be changed, all in ONE SINGLE MUTATION!
`
