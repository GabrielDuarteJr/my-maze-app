import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { noImageUrl } from '~/utils/constants';
import SerieCardComponent from '../SerieCardComponent';

describe('SerieCardComponent', () => {
  it('should renders the correct name', () => {
    const name = 'Test Series';
    const { getByText } = render(<SerieCardComponent name={name} onPress={() => {}} poster={null} />);

    const seriesName = getByText(name);
    expect(seriesName).toBeTruthy();
  });

  it('should renders noImageUrl when poster prop is null', () => {
    const { getByTestId } = render(<SerieCardComponent name="Test Series" onPress={() => {}} poster={null} />);
    const posterImage = getByTestId('poster-image');

    expect(posterImage.props.source.uri).toBe(noImageUrl);
  });

  it('should renders the correct poster image when poster prop is provided', () => {
    const poster = { medium: 'https://example.com/poster.jpg' };
    const { getByTestId } = render(<SerieCardComponent name="Test Series" onPress={() => {}} poster={poster} />);
    const posterImage = getByTestId('poster-image');

    expect(posterImage.props.source.uri).toBe(poster.medium);
  });

  it('should calls onPress when the card is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<SerieCardComponent name="Test Series" onPress={onPressMock} poster={null} />);
    const card = getByTestId('serie-card');

    fireEvent.press(card);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
