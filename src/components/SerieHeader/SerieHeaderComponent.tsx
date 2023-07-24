import React from 'react';
import {
  Header,
  Poster,
  HeaderDetails,
  SeriesName,
  SeriesDaysAndTime,
  SeriesGenres
} from './styles';

interface SerieCardInterface {
  poster: string;
  name: string;
  daysAndTime: string;
  genres: string;
}

const SerieHeaderComponent: React.FC<SerieCardInterface> = ({
  poster,
  name,
  daysAndTime,
  genres,
}) => {
  return (
    <Header testID="serie-header-component">
      <Poster source={{ uri: poster }} testID="poster-image" />
      <HeaderDetails>
        <SeriesName>{name}</SeriesName>
        <SeriesDaysAndTime>{daysAndTime}</SeriesDaysAndTime>
        <SeriesGenres>{genres}</SeriesGenres>
      </HeaderDetails>
    </Header>
  );
};

export default SerieHeaderComponent;
