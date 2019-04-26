import { AuthenticationError, ForbiddenError, InstanceOptions, IOContext, JanusClient, RequestConfig, UserInputError } from '@vtex/api'
import { AxiosError } from 'axios'
import { mergeAll, zipObj } from 'ramda'

/*
 * Convert a list of fields like [ {key: 'propertyName', value: 'String'}, ... ]
 * to a JSON format.
 */
const parseFieldsToJson = (fields: any) => mergeAll(
  fields.map((field: any) => zipObj([field.key], [field.value])),
)

interface KeyValue {
  key: string
  value: string
}

const statusToError = (e: any) => {
  if (!e.response) {
    throw e
  }
  const { response } = e as AxiosError
  const { status } = response!
  if (status === 401) {
    throw new AuthenticationError(e)
  }
  if (status === 403) {
    throw new ForbiddenError(e)
  }
  if (status === 400) {
    throw new UserInputError(e)
  }
  throw e
}

export class MasterData extends JanusClient {
  constructor (ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...options && options.headers,
        ...ctx.adminUserAuthToken ? {VtexIdclientAutCookie: ctx.adminUserAuthToken} : null,
        ...ctx.storeUserAuthToken ? {[`VtexIdclientAutCookie_${ctx.account}`]: ctx.storeUserAuthToken} : null,
      },
    })
  }

  public getDocument = (acronym: string, id: string, fields: string[] = []) => this.get(
    this.routes.document(acronym, id),
    { metric: 'masterdata-getDocument', params: { _fields: fields } }
  )

  public createDocument = (acronym: string, fields: KeyValue[]) => this.post(
    this.routes.documents(acronym),
    { metric: 'masterdata-createDocument', params: parseFieldsToJson(fields) }
  )

  protected get = (url: string, config?: RequestConfig) => {
    return this.http.get(url, config).catch(statusToError)
  }

  protected post = (url: string, config?: RequestConfig) => {
    return this.http.post(url, config).catch(statusToError)
  }

  protected delete = (url: string, config?: RequestConfig) => {
    return this.http.delete(url, config).catch(statusToError)
  }

  protected patch = (url: string, config?: RequestConfig) => {
    return this.http.patch(url, config).catch(statusToError)
  }

  private get routes () {
    const base = '/api/dataentities'
    return {
      document: (acronym: string, id: string) => `${base}/${acronym}/documents/${id}`,
      documents: (acronym: string) => `${base}/${acronym}/documents`,
      search: ({ acronym }: { acronym: string }) => `${base}/${acronym}/search`,
    }
  }
}
