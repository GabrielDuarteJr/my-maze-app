import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SerieDetailsScreen from '../SerieDetailsScreen';

const mockSeason = [
  {
    seasonNumber: 1,
    episodes: [
      { id: 1, number: 1, name: 'Episode Name', season: 1, summary: 'Summary of Episode 1' },
    ],
  },
];

const mockSerieDetails = {
  id: 1,
  name: 'Test Serie',
  image: { medium: 'https://example.com/serie.jpg' },
  poster: 'https://example.com/serie.jpg',
  daysAndTime: 'Mondays at 8:00 PM',
  genres: ['Drama', 'Sci-Fi'],
  summary: '<p>Summary of the serie</p>',
  seasons: mockSeason,
};

const mockFavoritesList = [
  { id: 1, name: 'Test Serie', image: 'https://example.com/serie.jpg' },
];

const mockAddFavorite = jest.fn();
const mockRemoveFavorite = jest.fn();

jest.mock('~/contexts/Series/SeriesContext', () => ({
  useSeries: () => ({
    serieDetails: mockSerieDetails,
    favoritesList: mockFavoritesList,
    addFavorite: mockAddFavorite,
    removeFavorite: mockRemoveFavorite,
    getEpisodeDetails: () => {}, loading: false }),
}));

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: () => null,
    }),
    ParamListBase: null,
  };
});

describe('SerieDetailsScreen', () => {
  it('should SerieHeaderComponent receives the correct props', () => {
    const { getByText } = render(<SerieDetailsScreen />);

    expect(getByText(mockSerieDetails.name)).toBeDefined();
    expect(getByText(mockSerieDetails.daysAndTime)).toBeDefined();
    expect(getByText(mockSerieDetails.genres.join(', '))).toBeDefined();
  });

  it('should button title changes based on whether the serie is favorited or not', () => {
    const { getByText } = render(<SerieDetailsScreen />);
    const button = getByText(mockFavoritesList.length > 0 ? 'Remove to favorite' : 'Add to favorite');

    fireEvent.press(button);

    if (mockFavoritesList.length > 0) {
      expect(mockRemoveFavorite).toHaveBeenCalledWith(mockSerieDetails.id);
    } else {
      expect(mockAddFavorite).toHaveBeenCalledWith({
        id: mockSerieDetails.id,
        name: mockSerieDetails.name,
        image: mockSerieDetails.image,
      });
    }
  });
});
