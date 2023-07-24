import React from 'react';
import EpisodeCardComponent from '~/components/EpisodeCard/EpisodeCardComponent';
import { removeHTMLTags } from '~/utils/helpers';
import { Container, SeasonTitle, EmpytResults } from './styles';

interface SeasonListInterface {
  data: Season[];
  onPressEpisode: (episodeId: number) => void;
}

const SeasonListComponent: React.FC<SeasonListInterface> = ({
  data,
  onPressEpisode,
}) => {

  if (!data.length) return <EmpytResults>No data avaliable</EmpytResults>

  const allItens = data.map((season, seasonIndex) => {
    return (
      <Container key={seasonIndex}>
        <SeasonTitle>Season {season.seasonNumber}</SeasonTitle>
        {season.episodes.map((episode, episodeIndex) => (
          <EpisodeCardComponent
            key={episodeIndex}
            episodeNumber={episode.number}
            name={episode.name}
            season={episode.season}
            summary={removeHTMLTags(episode.summary)}
            onPress={() => onPressEpisode(episode.id)}
          />
        ))}
      </Container>
    )
  });

  return allItens
};

export default SeasonListComponent;
