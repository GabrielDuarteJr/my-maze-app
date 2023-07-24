import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SeriesListScreen from '../SeriesListScreen';

const mockSearchSeries = jest.fn();
const mockFetchAllSeries = jest.fn();

jest.mock('~/contexts/Series/SeriesContext', () => ({
  useSeries: () => ({ seriesList: [], fetchAllSeries: mockFetchAllSeries, searchSeries: mockSearchSeries, getSerieDetails: () => {}, loading: false }),
}));

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: () => null,
    }),
    ParamListBase: null,
  };
});

describe('SeriesListScreen', () => {
  it('should calls handleSearch function correctly when searching', () => {
    const { getByPlaceholderText } = render(<SeriesListScreen />);
    const inputSearchComponent = getByPlaceholderText('Search series by name');

    fireEvent.changeText(inputSearchComponent, 'Test');

    expect(mockSearchSeries).toHaveBeenCalledWith('Test');
  });
});
