import type {
  CacheConfig,
  FetchFunction,
  GraphQLResponse,
  RequestParameters,
  UploadableMap,
  Variables,
} from 'relay-runtime';
import {Network, QueryResponseCache} from 'relay-runtime';

type RequestProps = {
  method: string;
  headers: Record<string, string>;
  body: string | FormData | null;
};

const GRAPHQL_URL = '/api/graphql';
const IS_SERVER = typeof window === typeof undefined;
const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

export const fetchGraphQL = async (
  operation: RequestParameters,
  variables: Variables,
  cacheConfig?: CacheConfig,
  uploadables?: UploadableMap | null,
): Promise<GraphQLResponse> => {
  const config: RequestProps = {
    method: 'POST',
    headers: {
      Authorization: '', // auth Token
      Accept: 'application/json',
    },
    body: '',
  };

  // When the `uploadables` are provided the [formData] is built following the GraphQL multipart request specification.
  // https://github.com/jaydenseric/graphql-multipart-request-spec

  if (uploadables) {
    const formData = new FormData();

    const requestText = operation?.text?.replace(/\n/g, '');

    const query = JSON.stringify({
      query: requestText,
      variables,
    });

    formData.append('operations', query);

    let map: {[key: number]: string[]} = {};

    let idx = 0;
    const prefix = 'variables';

    Object.keys(uploadables).forEach((field: string) => {
      const files = uploadables[field];

      if (Array.isArray(files)) {
        // multi uploads
        for (let i in files) {
          map[idx] = [`${prefix}.${field}.${i}`];
          formData.append(`${idx}`, files[i]);
          idx++;
        }

        formData.append('map', JSON.stringify(map));
      } else {
        // single upload
        map[idx] = [`${prefix}.${field}`];
        formData.append('map', JSON.stringify(map));
        formData.append(`${idx}`, files);
      }
    });

    formData.append('map', JSON.stringify(map));

    config.body = formData;
  } else {
    config.headers['Content-Type'] = 'application/json';

    config.body = JSON.stringify({
      query: operation.text,
      variables,
    });
  }

  const resp = await fetch(GRAPHQL_URL, config);

  return await resp.json();
};

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });

export function createNetwork(): ReturnType<(typeof Network)['create']> {
  const fetchResponse: FetchFunction = async (
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: UploadableMap | null,
  ) => {
    const isQuery = params.operationKind === 'query';
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;

    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);

      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return fetchGraphQL(params, variables, cacheConfig, uploadables);
  };

  const network = Network.create(fetchResponse);

  return network;
}
