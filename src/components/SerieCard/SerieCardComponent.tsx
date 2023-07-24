import React from 'react';
import { noImageUrl } from '~/utils/constants';
import { Card, SeriesName, Poster } from './styles';

interface SerieCardInterface {
  name: string;
  onPress: () => void;
  poster: ImageSerie | null;
}

const SerieCardComponent: React.FC<SerieCardInterface> = ({
  name,
  onPress,
  poster,
}) => {
  const renderSeriesImage = () => {
    const posterUri = poster ? poster.medium : noImageUrl;
    return <Poster source={{ uri: posterUri }} testID='poster-image' />;
  };

  return (
    <Card onPress={onPress} testID='serie-card'>
      {renderSeriesImage()}
      <SeriesName>{name}</SeriesName>
    </Card>
  );
};

export default SerieCardComponent;
