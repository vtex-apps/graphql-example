export default `
  # Preview with Cached Data

  In this example you will learn how to
  [Reuse Cached Data](https://www.apollographql.com/docs/react/advanced/caching.html#readfragment).

  This technique uses [Apollo Client's InMemory cache](https://www.apollographql.com/docs/react/advanced/caching.html#smooth-scroll-top) and enables a greater user experience by reusing the data already present in the browser's local cache for making content preview.

  This example shows how this feature can improve the user's experience. It starts by querying a book list, which is shown below.

  Clicking in a row will take you to the detail page. The detail page needs more data than the available in the list, like the author's name.

  We can deliver a better user experience by previewing the edition component with the already present book's name in the browser's cache.

  To make our code more simple, we do not allow the edition of any of the book's properties before the query bringing the whole book info is completed, so the preview info is shown with the input disabled.
`
