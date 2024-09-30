import type { InstanceOptions, IOContext } from '@vtex/api';
import { ExternalClient } from '@vtex/api';

type StoreTemplateCard = {
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  _createdAt: string;
  title: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

type QueryResult = {
  query: string;
  result: [StoreTemplateCard];
};

export class SanityClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`https://mfaylecy.api.sanity.io/v2024-09-25/data/query/test`, context, options);
  }

  private getSanityContent(query: string): Promise<QueryResult> {
    return this.http.get(`?query=${query}`);
  }

  public async storeTemplatedCards(): Promise<[StoreTemplateCard]> {
    const content = await this.getSanityContent('*[_type=="storeTemplatedCard"]');

    return content.result;
  }

  public async footer(): Promise<[StoreTemplateCard]> {
    const content = await this.getSanityContent('*[_type=="footer"]');

    return content.result;
  }
}
