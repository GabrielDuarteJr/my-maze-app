import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SeasonListComponent from '../SeasonListComponent';

const mockData = [
  {
    seasonNumber: 1,
    episodes: [
      { id: 1, number: 1, name: 'Episode Name', season: 1, summary: 'Summary of Episode 1' },
    ],
  },
];

describe('SeasonListComponent', () => {
  it('should renders "No data available" when data prop is empty', () => {
    const { getByText } = render(<SeasonListComponent data={[]} onPressEpisode={() => {}} />);
    const noDataText = getByText('No data avaliable');

    expect(noDataText).toBeTruthy();
  });

  it('should renders correct number of seasons and episodes when data prop is not empty', () => {
    const { getByText } = render(<SeasonListComponent data={mockData} onPressEpisode={() => {}} />);
    const season1Title = getByText('Season 1');
    const episode1Title = getByText('Episode 1 - Episode Name');

    expect(season1Title).toBeTruthy();
    expect(episode1Title).toBeTruthy();
  });

  it('should calls onPressEpisode when an episode card is pressed', () => {
    const onPressEpisodeMock = jest.fn();
    const { getByText } = render(<SeasonListComponent data={mockData} onPressEpisode={onPressEpisodeMock} />);
    const episode1Title = getByText('Episode 1 - Episode Name');

    fireEvent.press(episode1Title);

    expect(onPressEpisodeMock).toHaveBeenCalledWith(1);
  });
});
