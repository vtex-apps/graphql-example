# Session Client

> App that provides React hooks and GraphQL queries to read and update Session.

## Setup

Add this app as a dependency of your React VTEX IO app:

```bash
vtex add vtex.session-client
```

You can have full TypeScript support running `vtex setup --typings` afterwards.

## Usage

### React Hooks

The recommended way to use the session client is through the React hooks provided.

To read session:

- [`useRenderSession`](#useRenderSession)
- [`useFullSession`](#useFullSession)
- [`useLazyFullSession`](#useLazyFullSession)

To update session:

- [`useUpdateSession`](#useUpdateSession)
- [`useUpdateSessionInline`](#useUpdateSessionInline)

#### `useRenderSession`

The fastest response to a session value. It uses the session response from render-session. One caveat: the session values are limited to a [set of values](https://github.com/vtex-apps/render-session/blob/master/src/constants.ts). If you need fields that are not in this set, you can use [`useFullSession`](#useFullSession) or [`useLazyFullSession`](#useLazyFullSession).

**Usage**

```tsx
import React from 'react'
import { useRenderSession } from 'vtex.session-client'

function MyComponent() {
  const { loading, session, error } = useRenderSession()

  if (loading) {
    return <>Session is loading</>
  }

  if (error) {
    return <>Session has errors</>
  }

  console.log({ session })

  return <>Session is ready</>
}

export default MyComponent
```


#### `useFullSession`

> ⚠️ It's not possible to return the session during Server Side Rendering, since that's a private query.

Runs a GraphQL query on the client side to query the full user session.

Under the hood it's just a wrapper of React Apollo's `useQuery` passing the GraphQL session query. You can [read more about the `useQuery` API](https://www.apollographql.com/docs/react/api/react/hooks/#usequery).

**Usage**

```tsx
import React from 'react'
import { useFullSession } from 'vtex.session-client'

function MyComponent() {
  const { loading, data, error } = useFullSession()

  if (loading) {
    return <>Session is loading</>
  }

  if (error) {
    return <>Session has errors</>
  }

  console.log({ session: data?.session })

  return <>Session is ready</>
}

export default MyComponent
```

#### `useLazyFullSession`

The same as [`useFullSession`](#useFullSession) but it uses the React Apollo's `useLazyQuery` hook. You can [read more about `useLazyQuery` API](https://www.apollographql.com/docs/react/api/react/hooks/#uselazyquery).

**Usage**

```tsx
import React from 'react'
import { useLazyFullSession } from 'vtex.session-client'

function MyComponent() {
  const [getSession, session] = useLazyFullSession()

  console.log({ session })

  return <button onClick={() => getSession()}>Get session</button>
}

export default MyComponent
```

#### `useUpdateSession`

Update the values of the session. Under the hood it uses React Apollo's `useMutation` hook. You can [read more about `useMutation` API](https://www.apollographql.com/docs/react/api/react/hooks/#usemutation).

Differently from the `useMutation` hook, this hook only returns the mutation function (in the example bellow called `updateSession`), it doesn't return the mutation result. 

After calling the mutation function, it will reload the page. This is to guarantee that the whole page data is updated to the new session parameters. Example: sometimes search results changes depending on the session values.

**Usage**

```tsx
import React from 'react'
import { useUpdateSession } from 'vtex.session-client'

function MyComponent() {
  const updateSession = useUpdateSession()

  return (
    <button
      onClick={() =>
        updateSession({
          variables: {
            fields: { foo: 'bar', baz: 123 },
          },
        })
      }
    >
      Update session
    </button>
  )
}

export default MyComponent
```

#### `useUpdateSessionInline`

Update the values of the session. Under the hood it uses React Apollo's `useMutation` hook. You can [read more about `useMutation` API](https://www.apollographql.com/docs/react/api/react/hooks/#usemutation).

Differently from [`useUpdateSession`](#useUpdateSession), this hook will not reload the page after calling the mutation function.

**Usage**

```tsx
import React from 'react'
import { useUpdateSessionInline } from 'vtex.session-client'

function MyComponent() {
  const [updateSession, updatedSession] = useUpdateSessionInline()

  console.log({ updatedSession })

  return (
    <button
      onClick={() =>
        updateSession({
          variables: {
            fields: { foo: 'bar', baz: 123 },
          },
        })
      }
    >
      Update session
    </button>
  )
}

export default MyComponent
```

### GraphQL

#### session Query

Get the current user session.

**Usage**

```graphql
query session {
  session @context(provider: "vtex.session-client") {
    ... on SessionSuccess {
      id
      namespaces
    }
    ... on SessionError {
      type
      message
    }
  }
}
```

#### updateSesion Mutation

Changes the current user session.

**Usage**

Variables: `{ "fields": { "foo": 123, "baz": "abc" } }`

```graphql
mutation updateSession($fields: SessionFieldsJSONInput) {
  updateSession(fields: $fields) @context(provider: "vtex.session-client") {
    ... on SessionSuccess {
      id
      namespaces
    }
    ... on SessionError {
      type
      message
    }
  }
}
```
