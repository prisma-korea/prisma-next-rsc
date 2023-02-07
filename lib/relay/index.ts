import {Environment, RecordSource, Store} from 'relay-runtime';

import {createNetwork} from './fetch';
import {useMemo} from 'react';

let relayEnvironment: Environment;
const IS_SERVER = typeof window === typeof undefined;

function createRelayEnvironment(): Environment {
  return new Environment({
    network: createNetwork(),
    store: new Store(RecordSource.create()),
    isServer: IS_SERVER,
    log(event) {
      console.debug('[relay environment event]', event);
    },
  });
}

export function initEnvironment(): Environment {
  // For SSG and SSR always create a new Relay environment
  if (IS_SERVER) {
    return createRelayEnvironment();
  }

  // Create the Relay environment once in the client
  if (!relayEnvironment) {
    relayEnvironment = createRelayEnvironment();
  }

  return relayEnvironment;
}

export function useRelayEnvironment(): Environment {
  const store = useMemo(() => initEnvironment(), []);

  return store;
}
