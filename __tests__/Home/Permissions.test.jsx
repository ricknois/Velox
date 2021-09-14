import { render, waitFor, cleanup } from '@testing-library/react-native';
import * as Location from 'expo-location';
import React from 'react';
import Provider from '../../src/Context/provider';
import { Home } from '../../src/Pages';

afterEach(cleanup);

beforeEach(() => cleanup());
jest.mock('expo-location', () => ({
  __esModule: true,
  requestForegroundPermissionsAsync: jest.fn(async () => ({
    status: 'granted',
  })),
  enableNetworkProviderAsync: jest.fn(async () => true),
}));

describe('Permissions', () => {
  it('Locations request has been called', async () => {
    const spy = jest.spyOn(Location, 'requestForegroundPermissionsAsync');
    const spy3 = jest.spyOn(Location, 'enableNetworkProviderAsync');
    await waitFor(() => {
      render(
        <Provider>
          <Home />
        </Provider>
      );
    });
    expect(spy).toBeCalled();
    expect(spy3).toBeCalled();
  });
  it('Show Locations handler permissions denied', async () => {
    jest
      .spyOn(Location, 'requestForegroundPermissionsAsync')
      .mockReturnValueOnce({ status: 'denied' });
    jest
      .spyOn(Location, 'enableNetworkProviderAsync')
      .mockImplementationOnce(() => {
        throw new Error('erro');
      });
    const { getByText } = render(
      <Provider>
        <Home />
      </Provider>
    );
    await waitFor(async () => {
      expect(getByText('Permitir a localização')).toBeTruthy();
      expect(getByText('Ligar gps')).toBeTruthy();
    });
  });
  it('Show home page if permissions granted', async () => {
    const { getByTestId } = render(
      <Provider>
        <Home />
      </Provider>
    );
    await waitFor(async () => {
      expect(getByTestId('speedometer')).toBeTruthy();
    });
  });
});
