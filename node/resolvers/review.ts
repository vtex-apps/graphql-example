const DATA_ENTITY = 'PR'

const ALL_FIELDS = ['_all']

interface Review {
  productId: string
  rating: number
  review: string
  [key: string]: string | number
}

export const queries = {
  reviews: async (
    _: any,
    { productId }: { productId: string },
    { clients: { masterData: masterDataClient } }: Context
  ) => {
    const response = (await masterDataClient.getDocument(DATA_ENTITY, productId, ALL_FIELDS)) as any

    console.log({ response })

    return response.params
  },
}

interface KeyValue {
  key: string
  value: any
}

export const mutations = {
  newReview: async (
    _: any,
    { review }: { review: Review },
    { clients: { masterData: masterDataClient } }: Context
  ) => {
    const data = Object.keys(review).reduce((acc: KeyValue[], key: string) => {
      return acc.concat({ key, value: review[key] })
    }, [])

    const response = (await masterDataClient.createDocument(DATA_ENTITY, data)) as any

    console.log({ response })

    const savedReview = await masterDataClient.getDocument(
      DATA_ENTITY,
      response.DocumentId,
      ALL_FIELDS
    )

    console.log({ savedReview })

    return savedReview.params
  },
}
