import React from 'react';
import { Card, Name, Summary } from './styles';

interface EpisodeCardInterface {
  episodeNumber: number;
  name: string;
  season: number;
  summary: string;
  onPress: () => void;
}

const EpisodeCardComponent: React.FC<EpisodeCardInterface> = ({
  episodeNumber,
  name,
  summary,
  onPress,
}) => {
  return (
    <Card onPress={onPress} testID='button-container'>
      <Name>Episode {episodeNumber} - {name}</Name>
      <Summary>{summary}</Summary>
    </Card>
  );
};

export default EpisodeCardComponent;
