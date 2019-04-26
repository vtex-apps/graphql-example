export default `
  It's a kind of magic!

  The whole magic is made by using the cacheId option available in type Book and supported by InMemoryCache.

  Since InMemoryCache is a normalized data store, each element in the list has a unique key in the cache. This key is given by the cacheId field returned from the books.graphql query.

  The result of the mutation updates the book object under the key given by the returned cacheId. Since the object under the cacheId key was changed, when clicking in the back button and rerendering the book list, the list will be reconstructed with the new data, thus changing the rendered book info.

  Note that this feature can replace the use of Redux in most applications. Also, the name of the field cacheId is a convention and has to be respected
`
