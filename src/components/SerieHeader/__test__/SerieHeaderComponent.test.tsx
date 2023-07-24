import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import SerieHeaderComponent from '../SerieHeaderComponent';

describe('SerieHeaderComponent', () => {
  it('should renders the correct name', () => {
    const name = 'Test Series';
    const { getByText } = render(<SerieHeaderComponent poster="" name={name} daysAndTime="" genres="" />);

    const seriesName = getByText(name);
    expect(seriesName).toBeTruthy();
  });

  it('should renders the correct days and time', () => {
    const daysAndTime = 'Mondays at 8:00 PM';
    const { getByText } = render(<SerieHeaderComponent poster="" name="" daysAndTime={daysAndTime} genres="" />);

    const seriesDaysAndTime = getByText(daysAndTime);
    expect(seriesDaysAndTime).toBeTruthy();
  });

  it('should renders the correct genres', () => {
    const genres = 'Drama, Sci-Fi';
    const { getByText } = render(<SerieHeaderComponent poster="" name="" daysAndTime="" genres={genres} />);

    const seriesGenres = getByText(genres);
    expect(seriesGenres).toBeTruthy();
  });

  it('should renders the poster image correctly', () => {
    const posterUrl = 'https://example.com/poster.jpg';
    const { getByTestId } = render(<SerieHeaderComponent poster={posterUrl} name="" daysAndTime="" genres="" />);

    const posterImage = getByTestId('poster-image');
    expect(posterImage.props.source.uri).toBe(posterUrl);
  });
});
