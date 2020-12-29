import React, { useState } from 'react';
import { FlatList, Picker, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import ItemSeparator from '../components/ItemSeparator';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  searchbar: {
    margin: 10
  },
  fiterBar: {
    margin: 10
  }
});

export const RepositoryListContainer = ({ repositories, setOrderCriteria, searchKeyword, setSearchKeyword }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const [pickerState, setPickerState] = useState('LR');

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Searchbar
            style={styles.searchbar}
            placeholder="Search"
            onChangeText={(query) => setSearchKeyword(query)}
            value={searchKeyword}
          />
          <Picker
            style={styles.fiterBar}
            selectedValue={pickerState}
            onValueChange={(itemValue, itemIndex) => {

              switch (itemIndex) {
                case 0:
                  setOrderCriteria({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
                  break;
                case 1:
                  setOrderCriteria({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' });
                  break;
                case 2:
                  setOrderCriteria({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' });
                  break;
                default:
                  setOrderCriteria({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
                  break;
              }
              setPickerState(itemValue);
              return itemValue;
            }}
          >
            <Picker.Item label='Latest repositories' value='LR' />
            <Picker.Item label='Highest rated repositories' value='HRR' />
            <Picker.Item label='Lowest rated repositories' value='LRR' />
          </Picker>
        </>}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};

const RepositoryList = () => {
  const [orderCriteria, setOrderCriteria] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchKeywordDebounced] = useDebounce(searchKeyword, 500);
  const { repositories } = useRepositories(orderCriteria, searchKeywordDebounced);

  return <RepositoryListContainer
    repositories={repositories}
    setOrderCriteria={setOrderCriteria}
    orderCriteria={orderCriteria}
    searchKeyword={searchKeyword}
    setSearchKeyword={setSearchKeyword}
  />;
};

export default RepositoryList;