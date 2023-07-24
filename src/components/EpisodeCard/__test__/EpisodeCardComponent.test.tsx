import 'react-native';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import EpisodeCardComponent from '../EpisodeCardComponent';

describe('EpisodeCardComponent', () => {
  const episodeMock = {
    episodeNumber: 1,
    name: 'testName',
    summary: 'testSummary',
    onPress: jest.fn(),
  };

  it('should render correctly', () => {
    render(<EpisodeCardComponent {...episodeMock} />);

    expect(screen.getByText(`Episode ${episodeMock.episodeNumber} - ${episodeMock.name}`)).toBeDefined();
    expect(screen.getByText(episodeMock.summary)).toBeDefined();
  });

  it('should call onPress correctly', () => {
    render(<EpisodeCardComponent {...episodeMock} />);

    fireEvent.press(screen.getByTestId('button-container'));

    expect(episodeMock.onPress).toBeCalled();
  });
});

