import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from '~/routes/TabNavigators/HomeTabNavigator';
import SerieDetailsScreen from '~/screens/SerieDetails/SerieDetailsScreen';
import EpisodeDetailsScreen from '~/screens/EpisodeDetails/EpisodeDetailsScreen';
import {
  hiddenHeaderScreenOptions,
  hiddenGestureScreenOptions,
} from '~/utils/constants';

type MainStackParamList = {
  HomeNavigator: undefined;
  SerieDetails: undefined;
  EpisodeDetails: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="HomeNavigator"
    screenOptions={hiddenGestureScreenOptions}>
    <Stack.Screen
      name="HomeNavigator"
      component={HomeTabNavigator}
      options={hiddenHeaderScreenOptions}
    />
    <Stack.Screen
      name="SerieDetails"
      component={SerieDetailsScreen}
      options={{ title: 'Series details' }}
    />
    <Stack.Screen
      name="EpisodeDetails"
      component={EpisodeDetailsScreen}
      options={{ title: 'Episode details' }}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;
