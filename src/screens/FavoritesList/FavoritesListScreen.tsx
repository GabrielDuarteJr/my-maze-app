import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoaderComponent from '~/components/Loader/LoaderComponent';
import SerieCardComponent from '~/components/SerieCard/SerieCardComponent';
import { useSeries } from '~/contexts/Series/SeriesContext';
import { Container, EmpytResults } from './styles';

const FavoritesListScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {
    favoritesList,
    getSerieDetails,
    loading,
  } = useSeries();

  const onPressSerie = (serieId: number) => {
    getSerieDetails(serieId);
    navigation.navigate('SerieDetails');
  }

  const renderItem = ({ item }: { item: Series }) => (
    <SerieCardComponent
      name={item.name}
      poster={item.image}
      onPress={() => onPressSerie(item.id)}
    />
  );

  if (loading) return <LoaderComponent />;

  return (
    <Container>
      <FlatList
        data={favoritesList}
        renderItem={renderItem}
        ListEmptyComponent={() => <EmpytResults>No results found</EmpytResults>}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </Container>
  );
};

export default FavoritesListScreen;
