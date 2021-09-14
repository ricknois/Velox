/* eslint-disable no-undef */
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const bannerTestID = 'ca-app-pub-3940256099942544/6300978111';
const productionBannerID = 'ca-app-pub-1269207393202968/1757716215';
const interstitialTestID = 'ca-app-pub-3940256099942544/1033173712';
const interstitialProductionID = 'ca-app-pub-1269207393202968/9452184428';

export const adBannerID =
  Constants.isDevice && !__DEV__ ? productionBannerID : bannerTestID;
export const adInterstitialID =
  Constants.isDevice && !__DEV__
    ? interstitialProductionID
    : interstitialTestID;

export const verifyLocalStorage = async () => {
  if ((await AsyncStorage.getItem('@runs')) === null) {
    await AsyncStorage.setItem('@runs', JSON.stringify([]));
  }
};
