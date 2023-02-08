import {Environment, RecordSource, Store} from 'relay-runtime';

import {createNetwork} from './fetch';

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

const environment = createRelayEnvironment();

export function getCurrentEnvironment(): Environment {
  if (IS_SERVER) {
    return createRelayEnvironment();
  }

  return environment;
}
