import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SeriesListScreen from '~/screens/SeriesList/SeriesListScreen';
import FavoritesListScreen from '~/screens/FavoritesList/FavoritesListScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator();

export const HomeTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="SeriesList"
        component={SeriesListScreen}
        options={{
          title: 'Series list',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="movie-open-outline" color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="FavoritesList"
        component={FavoritesListScreen}
        options={{
          title: 'List of favorites',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="favorite-border" color={color} size={size} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTabNavigator;
