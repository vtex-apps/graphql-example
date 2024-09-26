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

type StoreTemplatedCardResult = {
  query: string;
  result: [StoreTemplateCard];
};

export class SanityClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`https://mfaylecy.api.sanity.io/v2024-09-25/data/query/test`, context, options);
  }

  public async storeTemplatedCards(): Promise<[StoreTemplateCard]> {
    const cards = await this.http.get<StoreTemplatedCardResult>('?query=*[_type=="storeTemplatedCard"]');

    return cards.result;
  }
}
