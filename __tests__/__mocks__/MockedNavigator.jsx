import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export default function MockedNavigator({ component, params = {} }) {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Screen
          name="MockedComponent"
          component={component}
          initialParams={params}
        />
      </Navigator>
    </NavigationContainer>
  );
}
