import React, { useMemo } from 'react';
import { Button } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoaderComponent from '~/components/Loader/LoaderComponent';
import SerieHeaderComponent from '~/components/SerieHeader/SerieHeaderComponent';
import SeasonListComponent from '~/components/SeasonList/SeasonListComponent';
import { useSeries } from '~/contexts/Series/SeriesContext';
import { removeHTMLTags } from '~/utils/helpers';
import { Constainer, Summary, EpisodesTitle, EmpytResults } from './styles';

const SerieDetailsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {
    serieDetails,
    favoritesList,
    addFavorite,
    removeFavorite,
    getEpisodeDetails,
    loading,
  } = useSeries();

  const isFavorited = useMemo(() => {
    const found = favoritesList.find(favorite => favorite.id === serieDetails?.id);
    return !!found;
  }, [favoritesList]);

  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(serieDetails?.id)
    } else {
      addFavorite({
        id: serieDetails?.id,
        name: serieDetails?.name,
        image: serieDetails?.image,
      })
    }
  };

  const onPressEpisode = (episodeId: number) => {
    getEpisodeDetails(episodeId);
    navigation.navigate('EpisodeDetails');
  }

  if (loading) return <LoaderComponent />;
  if (!serieDetails) return <EmpytResults>No data avaliable</EmpytResults>;

  return (
    <Constainer>
      <SerieHeaderComponent
        poster={serieDetails?.poster}
        name={serieDetails?.name}
        daysAndTime={serieDetails?.daysAndTime}
        genres={serieDetails?.genres.join(', ')}
      />
      <Summary>{removeHTMLTags(serieDetails?.summary)}</Summary>
      <Button
        title={isFavorited ? 'Remove to favorite' : 'Add to favorite'}
        onPress={handleToggleFavorite}
        color={isFavorited ? '#F52D56' : '#007AFF'}
      />
      <EpisodesTitle>Episodes</EpisodesTitle>
      <SeasonListComponent
        data={serieDetails?.seasons}
        onPressEpisode={onPressEpisode}
      />
    </Constainer>
  );
};

export default SerieDetailsScreen;
