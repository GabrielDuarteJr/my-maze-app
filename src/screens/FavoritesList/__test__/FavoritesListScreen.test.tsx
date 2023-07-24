import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoritesListScreen from '../FavoritesListScreen';

const mockFavoritesList = [
  { id: 1, name: 'Series 1', image: 'https://example.com/series1.jpg' },
  { id: 2, name: 'Series 2', image: 'https://example.com/series2.jpg' },
];

const mockGetSerieDetails = jest.fn();

jest.mock('~/contexts/Series/SeriesContext', () => ({
  useSeries: () => ({ favoritesList: mockFavoritesList, getSerieDetails: mockGetSerieDetails, loading: false }),
}));

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: () => null,
    }),
    ParamListBase: null,
  };
});

describe('FavoritesListScreen', () => {
  it('should renders the correct number of items when favoritesList is not empty', () => {
    const { getAllByTestId } = render(<FavoritesListScreen />);
    const serieCards = getAllByTestId('serie-card');

    expect(serieCards.length).toBe(mockFavoritesList.length);
  });

  it('should calls onPressSerie when a serie card is pressed', () => {
    const { getAllByTestId } = render(<FavoritesListScreen />);
    const serieCard = getAllByTestId('serie-card');

    fireEvent.press(serieCard[0]);

    expect(mockGetSerieDetails).toHaveBeenCalledTimes(1);
  });
});
