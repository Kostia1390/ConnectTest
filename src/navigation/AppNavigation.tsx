import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenEnum, StackParamList } from 'utils/types';
import { MainScreen } from 'screens/MainScreen';
import { ModelScreen } from 'screens/ModelScreen';

const Stack = createStackNavigator<StackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenEnum.Main}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={ScreenEnum.Main}
          component={MainScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.Model}
          component={ModelScreen}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}