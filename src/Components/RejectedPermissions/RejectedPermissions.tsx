import React from 'react';
import Constants from 'expo-constants';
import * as IntentLauncher from 'expo-intent-launcher';
import {
  Container,
  ButtonContainer,
  Advice,
  Content,
  AdviceContainer,
  ButtonText,
} from './style';
import Button from '../Button/Button';
import { translate } from '../../locales';

export default function RejectedPermissions({
  handleGpsStart,
  permission,
  service,
  handlePermission,
}) {
  // const pkg = Constants.expo.releaseChannel
  //   ? Constants.manifest.android.package
  //   : 'host.exp.exponent';

  const handleOpenSettings = async () => {
    // IntentLauncher.startActivityAsync(
    //   IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
    //   { data: `package:${pkg}` }
    // );
    handlePermission();
  };

  return (
    <Container>
      <AdviceContainer>
        <Advice>{translate('locationAdvice')}</Advice>
      </AdviceContainer>
      <Content>
        {!permission ? (
          <ButtonContainer testID="handlePermissionButton">
            <Button style={{ margin: 60 }} onPress={() => handleOpenSettings()}>
              <ButtonText>{translate('openSettingsBtn')}</ButtonText>
            </Button>
          </ButtonContainer>
        ) : null}
        {!service ? (
          <ButtonContainer testID="handleGpsStartButton">
            <Button
              style={{ margin: 60 }}
              onPress={async () => handleGpsStart()}
            >
              <ButtonText>{translate('handleGpsStartBtn')}</ButtonText>
            </Button>
          </ButtonContainer>
        ) : null}
      </Content>
    </Container>
  );
}
