import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoaderComponent from '~/components/Loader/LoaderComponent';
import SerieCardComponent from '~/components/SerieCard/SerieCardComponent';
import InputSearchComponent from '~/components/InputSearch/InputSearchComponent';
import { useSeries } from '~/contexts/Series/SeriesContext';
import { Container, EmpytResults } from './styles';

const SeriesListScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const {
    seriesList,
    fetchAllSeries,
    searchSeries,
    getSerieDetails,
    loading,
  } = useSeries();

  useEffect(() => {
    fetchAllSeries();
  }, []);

  const handleLoadMore = () => {
    if (!searchQuery.length && seriesList.length) {
      const nextPage = Math.ceil(seriesList.length / 250) + 1;
      fetchAllSeries(nextPage);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    fetchAllSeries();
  };

  const handleSearch = (search: string) => {
    setSearchQuery(search);
    searchSeries(search);
  }

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
      <InputSearchComponent
        value={searchQuery}
        onChangeText={handleSearch}
        showButtonClear={!!searchQuery.length}
        onPressClear={handleClearSearch}
      />
      <FlatList
        data={seriesList}
        renderItem={renderItem}
        ListEmptyComponent={() => <EmpytResults>No results found</EmpytResults>}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
};

export default SeriesListScreen;
