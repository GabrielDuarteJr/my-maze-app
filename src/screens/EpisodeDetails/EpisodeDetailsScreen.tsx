import React from 'react';
import LoaderComponent from '~/components/Loader/LoaderComponent';
import { useSeries } from '~/contexts/Series/SeriesContext';
import { removeHTMLTags } from '~/utils/helpers';
import {
  Constainer,
  EpisodeImage,
  EpisodeName,
  EpisodeDetails,
  EpisodeSummary,
  EmpytResults,
} from './styles';

const EpisodeDetailsScreen: React.FC = () => {
  const {
    episodeDetails,
    loading,
  } = useSeries();

  if (loading) return <LoaderComponent />;
  if (!episodeDetails) return <EmpytResults>No data avaliable</EmpytResults>;

  return (
    <Constainer>
      <EpisodeImage source={{ uri: episodeDetails?.image }} testID="episode-image" />
      <EpisodeName>{episodeDetails?.name}</EpisodeName>
      <EpisodeDetails>Season {episodeDetails?.season}, Episode {episodeDetails?.number}</EpisodeDetails>
      <EpisodeSummary>{removeHTMLTags(episodeDetails?.summary)}</EpisodeSummary>
    </Constainer>
  );
};

export default EpisodeDetailsScreen;
