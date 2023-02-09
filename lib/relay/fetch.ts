import type {
  CacheConfig,
  FetchFunction,
  GraphQLResponse,
  RequestParameters,
  UploadableMap,
  Variables,
} from 'relay-runtime';
import {Network, QueryResponseCache} from 'relay-runtime';

import invariant from 'tiny-invariant';

type RequestProps = {
  method: string;
  headers: Record<string, string>;
  body: string | FormData | null;
};

const IS_DEV = process.env.NODE_ENV === 'development';
/* 
  If deploy on vercel. you can get a current pathname with environment env 
  https://vercel.com/docs/concepts/projects/environment-variables
*/
const BASE_URL = IS_DEV
  ? 'http://localhost:3000'
  : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

!IS_DEV &&
  invariant(
    process.env.NEXT_PUBLIC_VERCEL_URL,
    'Can not found NEXT_PUBLIC_GRAPHQL_URL',
  );

const GRAPHQL_URL = `${BASE_URL}/api/graphql`;
const IS_SERVER = typeof window === typeof undefined;
const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

export const networkFetch = async (
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

  const json = await resp.json();

  if (Array.isArray(json.errors)) {
    throw new Error(
      `Error fetching GraphQL query '${
        operation.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors,
      )}`,
    );
  }

  return json;
};

export const responseCache = IS_SERVER
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

    return networkFetch(params, variables, cacheConfig, uploadables);
  };

  const network = Network.create(fetchResponse);

  return network;
}
