import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import seriesService from '~/services/seriesService';
import { noImageUrl } from '~/utils/constants';

export interface SeriesContextInterface {
  seriesList: Series[],
  favoritesList: Series[],
  serieDetails: SerieDetails | null,
  episodeDetails: Episode | null,
  fetchAllSeries: Function,
  searchSeries: Function,
  getSerieDetails: Function,
  getEpisodeDetails: Function,
  addFavorite: Function,
  removeFavorite: Function,
  loading: boolean,
}

export const SeriesContext = React.createContext<SeriesContextInterface>({
  seriesList: [],
  favoritesList: [],
  serieDetails: null,
  episodeDetails: null,
  fetchAllSeries: () => null,
  searchSeries: () => null,
  getSerieDetails: () => null,
  getEpisodeDetails: () => null,
  addFavorite: () => null,
  removeFavorite: () => null,
  loading: false,
});

export const SeriesProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({children}) => {
  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const [favoritesList, setFavoritesList] = useState<Series[]>([]);
  const [serieDetails, setSerieDetails] = useState<SerieDetails | null>(null);
  const [episodeDetails, setEpisodeDetails] = useState<Episode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAllSeries = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const response = await seriesService.listAllSeries(pageNumber);
      const data: Series[] = response.data;
      setSeriesList((prevSeries) => [...prevSeries, ...data]);
    } catch (error) {
      Alert.alert('Oops..', 'We had a problem fetching the series, please try again later', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log('Error fetching series data:', error);
    }
    setLoading(false);
  };

  const searchSeries = async (searchQuery: string) => {
    try {
      const response = await seriesService.searchSeriesByName(searchQuery);
      const data: Series[] = response.data.map((item: { show: Series }) => item.show);
      setSeriesList(data);
    } catch (error) {
      Alert.alert('Oops..', 'We had a problem fetching the series, please try again later', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log('Error searching series:', error);
    }
  };

  const organizeEpisodesBySeason = (episodes: Episode[]) => {
    const episodesBySeason: any = {};
    episodes.forEach((episode: Episode) => {
      const seasonNumber = episode.season;

      if (!episodesBySeason[seasonNumber]) {
        episodesBySeason[seasonNumber] = [];
      }

      episodesBySeason[seasonNumber].push(episode);
    });

    const seasons: Season[] = Object.entries(episodesBySeason).map(([seasonNumber, episodes]) => ({
      seasonNumber: Number(seasonNumber),
      episodes: episodes as Episode[],
    }));

    return seasons;
  };

  const getSerieDetails = async (serieId: string) => {
    setLoading(true);
    try {
      const responseDetais = await seriesService.detailsOfSeries(serieId);
      const responseEpisodes = await seriesService.getAllEpisodesBySerie(serieId);
      const seasons: Season[] = organizeEpisodesBySeason(responseEpisodes.data);
      setSerieDetails({
        id: responseDetais.data.id,
        name: responseDetais.data.name,
        poster: responseDetais.data.image ? responseDetais.data.image.medium : noImageUrl,
        image: responseDetais.data.image,
        daysAndTime: responseDetais.data.daysAndTime,
        genres: responseDetais.data.genres,
        summary: responseDetais.data.summary,
        seasons,
      });
    } catch (error) {
      Alert.alert('Oops..', 'There was a problem fetching the series details, please try again later', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log('Error get serie details:', error);
    }
    setLoading(false);
  }

  const getEpisodeDetails = async (episodeId: string) => {
    setLoading(true);
    try {
      const responseDetais = await seriesService.detailsOfEpisode(episodeId);
      setEpisodeDetails({
        id: responseDetais.data.id,
        name: responseDetais.data.name,
        number: responseDetais.data.number,
        season: responseDetais.data.season,
        summary: responseDetais.data.summary,
        image: responseDetais.data.image ? responseDetais.data.image.medium : noImageUrl,
      })
    } catch (error) {
      Alert.alert('Oops..', 'There was a problem fetching the episode details, please try again later', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log('Error get episode details:', error);
    }
    setLoading(false);
  }

  const addFavorite = async (serie: Series) => {
    setFavoritesList((prevSeries) => [...prevSeries, serie]);
  }

  const removeFavorite = async (serieId: number) => {
    const newFavoritesList = favoritesList.filter(favorite => favorite.id !== serieId);

    setFavoritesList(newFavoritesList);
  }

  return (
    <SeriesContext.Provider
      value={{
        seriesList,
        favoritesList,
        serieDetails,
        episodeDetails,
        fetchAllSeries,
        searchSeries,
        getSerieDetails,
        getEpisodeDetails,
        addFavorite,
        removeFavorite,
        loading,
      }}>
      {children}
    </SeriesContext.Provider>
  );
};

export const useSeries = () => useContext(SeriesContext);
