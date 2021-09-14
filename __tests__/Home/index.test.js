import { render, waitFor } from '@testing-library/react-native';
import { NativeModulesProxy } from '@unimodules/core';
import * as Location from 'expo-location';
import { mockProperty, unmockAllProperties } from 'jest-expo';
import React from 'react';
import Provider from '../../src/Context/provider';
import { Home } from '../../src/Pages';
import { MockedNavigator } from '../__mocks__';

const fakeReturnValue = {
  coords: {
    latitude: 1,
    longitude: 2,
    altitude: 3,
    accuracy: 4,
    heading: 5,
    speed: 6,
  },
  timestamp: 7,
};

function applyMocks() {
  mockProperty(
    NativeModulesProxy.ExpoLocation,
    'getCurrentPositionAsync',
    jest.fn(async () => fakeReturnValue)
  );
  mockProperty(
    NativeModulesProxy.ExpoLocation,
    'requestPermissionsAsync',
    jest.fn(async () => {})
  );
  mockProperty(
    NativeModulesProxy.ExpoLocation,
    'enableNetworkProviderAsync',
    jest.fn(async () => {})
  );
}

beforeAll(() => {
  Location.installWebGeolocationPolyfill();
});

beforeEach(() => {
  applyMocks();
});

afterEach(() => {
  unmockAllProperties();
});

describe('watchPositionAsync', () => {
  it(`receives repeated events`, async () => {
    let resolveBarrier;
    const callback = jest.fn();
    const watchBarrier = new Promise(resolve => {
      resolveBarrier = resolve;
    });
    mockProperty(
      NativeModulesProxy.ExpoLocation,
      'watchPositionImplAsync',
      jest.fn(resolveBarrier)
    );
    await Location.watchPositionAsync({}, callback);
    await watchBarrier;

    emitNativeLocationUpdate(fakeReturnValue, 0);
    emitNativeLocationUpdate(fakeReturnValue, 20);
    emitNativeLocationUpdate(fakeReturnValue, 50);
    emitNativeLocationUpdate(fakeReturnValue, 70);
    emitNativeLocationUpdate(fakeReturnValue, 120);
    expect(callback).toHaveBeenCalledTimes(5);
  });
});

describe('watchPositionAsync', () => {
  it(`receives repeated events`, async () => {
    let resolveBarrier;
    const callback = jest.fn();
    const watchBarrier = new Promise(resolve => {
      resolveBarrier = resolve;
    });
    mockProperty(
      NativeModulesProxy.ExpoLocation,
      'watchPositionImplAsync',
      jest.fn(resolveBarrier)
    );
    await Location.watchPositionAsync({}, callback);
    await watchBarrier;

    emitNativeLocationUpdate(fakeReturnValue, 0);
    emitNativeLocationUpdate(fakeReturnValue, 20);
    emitNativeLocationUpdate(fakeReturnValue, 50);
    emitNativeLocationUpdate(fakeReturnValue, 70);
    emitNativeLocationUpdate(fakeReturnValue, 120);
    expect(callback).toHaveBeenCalledTimes(5);
  });
});

function emitNativeLocationUpdate(location, speed) {
  location.coords.speed = speed;
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location,
  });
}
