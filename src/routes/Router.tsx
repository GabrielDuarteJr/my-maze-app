import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from '~/routes/StackNavigators/MainStackNavigator';
import {
  hiddenHeaderScreenOptions,
  hiddenGestureScreenOptions,
} from '~/utils/constants';

type RootStackParamList = {
  MainNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="MainNavigator"
      screenOptions={hiddenGestureScreenOptions}>
      <Stack.Screen
        name="MainNavigator"
        component={MainStackNavigator}
        options={hiddenHeaderScreenOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
