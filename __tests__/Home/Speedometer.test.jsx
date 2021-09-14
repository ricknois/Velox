import {
  render,
  waitFor,
  cleanup,
  within,
  fireEvent,
} from '@testing-library/react-native';
import * as Location from 'expo-location';
import React from 'react';
import Provider from '../../src/Context/provider';
import { Home } from '../../src/Pages';
import { Speedometer } from '../../src/Components';

afterEach(cleanup);

const bla = [
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 0,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 5,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 10,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 20,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 25,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 30,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 33,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 40,
    },
    timestamp: 7,
  },
  {
    coords: {
      latitude: 1,
      longitude: 2,
      altitude: 3,
      accuracy: 4,
      heading: 5,
      speed: 40,
    },
    timestamp: 7,
  },
];

let counter = 0;
const bkz = async callback => {
  if (counter < 4) {
    return new Promise(resolve => {
      setTimeout(async () => {
        resolve(bla[counter]);
        counter = counter + 1;
        callback(await bkz(callback));
      }, 1000);
    });
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(bla[bla.length - 1]);
    }, 1000);
  });
};

beforeEach(() => {
  cleanup();
  jest.resetModules();
});
jest.mock('expo-location', () => ({
  __esModule: true,
  requestForegroundPermissionsAsync: jest.fn(async () => ({
    status: 'granted',
  })),
  enableNetworkProviderAsync: jest.fn(async () => true),
  watchPositionAsync: jest.fn(async (_obj, callback) =>
    jest.fn(callback(await bkz(callback)))
  ),
}));

describe('Permissions', () => {
  it('Locations request has been called', async done => {
    const spy = jest.spyOn(Location, 'watchPositionAsync');

    const {
      findByText,
      getByTestId,
      getByText,
      findByTestId,
      findAllByTestId,
      update,
      container,
      toJSON,
    } = render(
      <Provider>
        <Speedometer />
      </Provider>
    );

    waitFor(async () => {
      expect(spy).toBeCalledTimes(1);
      expect(getByText('0 km/h')).toBeTruthy();
      done();
      expect(getByText('18 km/h')).toBeTruthy();
      // expect(await findByText('36 km/h')).toBeTruthy();
      // expect(await findByText('108 km/h')).toBeTruthy();
      // expect(await findByText('108 km/h')).toBeTruthy();
      // expect(await findByText('118 km/h')).toBeTruthy();
    });
  });
});
