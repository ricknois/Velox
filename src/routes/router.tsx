import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Home, History } from '../Pages';
import { theme } from '../global';
import { Background } from '../Components';

export default function Router() {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <Background />,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.line,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="stopwatch" size={22} color={theme.colors.primary} />
            ) : (
              <Entypo name="stopwatch" size={22} color={theme.colors.line} />
            ),
        }}
      />
      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons
                name="history"
                size={24}
                color={theme.colors.primary}
              />
            ) : (
              <MaterialIcons
                name="history"
                size={24}
                color={theme.colors.line}
              />
            ),
        }}
      />
    </Navigator>
  );
}
