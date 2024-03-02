import * as StoreReview from 'expo-store-review';

const handleReview = async () => {
  if (await StoreReview.hasAction()) await StoreReview.requestReview();
};

export default handleReview;
