import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React, { useContext } from 'react';
import { ToastAndroid } from 'react-native';
import storeContext from '../../Context/context';
import { theme } from '../../global';
// import adInterstitial from '../../global/AdInterstitials';
import handleReview from '../../global/Review';
import { translate } from '../../locales';
import {
  Button,
  ButtonContainer,
  Container,
  Subtitle,
  TextContainer,
  Title,
} from './style';

export default function Results() {
  const { distance, counter, setClear, setDone, done, setDistance } =
    useContext(storeContext);

  const handleReset = () => {
    setClear(true);
    setDone(false);
    setDistance(0);
    handleReview();
  };

  const handleToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  const handleSave = async () => {
    if (!done) return handleToast(translate('errorSaveToast'));
    handleToast(translate('saveToast'));

    const value = await AsyncStorage.getItem('@runs');
    const date = moment().format();
    const newValue = { distance, counter, date };
    const arrayValue = JSON.parse(value);
    await AsyncStorage.setItem(
      '@runs',
      JSON.stringify([...arrayValue, newValue])
    );
    // return adInterstitial();
  };

  return (
    <Container>
      <TextContainer>
        <Title>0 - 100:</Title>
        <Subtitle>{counter.toString().replace(':', '.')}</Subtitle>
        <ButtonContainer>
          <Button onPress={() => handleSave()} theme={theme.colors.level6}>
            <AntDesign name="save" size={24} color="black" />
          </Button>
          <Button onPress={() => handleReset()} theme="yellow">
            <MaterialCommunityIcons name="restart" size={24} color="black" />
          </Button>
        </ButtonContainer>
      </TextContainer>
      <TextContainer>
        <Title>{translate('distance')}</Title>
        <Subtitle>{`${distance} m`}</Subtitle>
      </TextContainer>
    </Container>
  );
}
