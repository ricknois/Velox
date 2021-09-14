import React from 'react';
import { AdMobBanner } from 'expo-ads-admob';
import { Container } from './style';
import { adBannerID } from '../../utils/helper';

export default function AdBanner() {
  if (process.env.APP_ENV === 'paid') {
    return null;
  }
  return (
    <Container>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adBannerID}
        servePersonalizedAds
      />
    </Container>
  );
}
