import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import { RowHiddenButton } from '../../Components';
import {
  Container,
  Advice,
  TextContainer,
  Content,
  Date,
  Result,
  Label,
  AdviceContainer,
} from './style';
import { AdBanner } from '../../global';
import { translate } from '../../locales';

export default function History() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);

  const fetchData = async () => {
    const value = await AsyncStorage.getItem('@runs');
    setData(JSON.parse(value));
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [change])
  );

  const handleTrash = async (index) => {
    data.splice(index, 1);
    const newData = JSON.stringify(data);
    await AsyncStorage.setItem('@runs', newData);
    setChange(!change);
  };

  if (data.length === 0) {
    return (
      <AdviceContainer>
        <Advice>{translate('historic')}</Advice>
        <AdBanner />
      </AdviceContainer>
    );
  }
  return (
    <>
      <Container>
        <SwipeListView
          data={data}
          renderItem={(item) => (
            <Content key={item.item.date}>
              <TextContainer>
                <Label>0 - 100:</Label>
                <Result theme>{` ${item.item.counter
                  .toString()
                  .replace(':', '.')}s`}</Result>
              </TextContainer>
              <TextContainer>
                <Label>{translate('distance')}</Label>
                <Result>{` ${item.item.distance}m`}</Result>
              </TextContainer>
              <Date>{moment(item.item.date).fromNow()}</Date>
            </Content>
          )}
          renderHiddenItem={(item) => (
            <RowHiddenButton onPress={() => handleTrash(item.index)} />
          )}
          leftOpenValue={75}
        />
      </Container>
      <AdBanner />
    </>
  );
}
