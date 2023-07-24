import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import EpisodeDetailsScreen from '../EpisodeDetailsScreen';

const mockEpisodeDetails = {
  image: 'https://example.com/episode.jpg',
  name: 'Test Episode',
  season: 2,
  number: 3,
  summary: '<p>Summary of the episode</p>',
};

jest.mock('~/contexts/Series/SeriesContext', () => ({
  useSeries: () => ({ episodeDetails: mockEpisodeDetails, loading: false }),
}));

describe('EpisodeDetailsScreen', () => {
  it('should renders episode details correctly when episodeDetails is not null', () => {
    const { getByTestId, getByText } = render(<EpisodeDetailsScreen />);
    const episodeImage = getByTestId('episode-image');
    const episodeName = getByText(mockEpisodeDetails.name);
    const episodeDetails = getByText(`Season ${mockEpisodeDetails.season}, Episode ${mockEpisodeDetails.number}`);
    const episodeSummary = getByText('Summary of the episode');

    expect(episodeImage.props.source.uri).toBe(mockEpisodeDetails.image);
    expect(episodeName).toBeTruthy();
    expect(episodeDetails).toBeTruthy();
    expect(episodeSummary).toBeTruthy();
  });
});
