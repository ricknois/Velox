jest.mock('expo-location', () => ({
  __esModule: true,
  requestForegroundPermissionsAsync: jest.fn(async () => ({
    status: 'granted',
  })),
  enableNetworkProviderAsync: jest.fn(async () => true),
}));
const expoLocationMock = () => ({
  __esModule: true,
  requestForegroundPermissionsAsync: jest.fn(async () => ({
    status: 'granted',
  })),
  enableNetworkProviderAsync: jest.fn(async () => true),
});

export default expoLocationMock;
