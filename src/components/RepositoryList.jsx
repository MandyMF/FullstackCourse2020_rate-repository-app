import React, { useState } from 'react';
import { FlatList, Picker } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import ItemSeparator from '../components/ItemSeparator';


export const RepositoryListContainer = ({ repositories, setOrderCriteria }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const [pickerState, setPickerState] = useState('LR');

  return (
    <FlatList
      ListHeaderComponent={
        <Picker
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
        </Picker>}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    // other props
    />
  );
};

const RepositoryList = () => {
  const [orderCriteria, setOrderCriteria] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
  const { repositories } = useRepositories(orderCriteria);

  return <RepositoryListContainer repositories={repositories} setOrderCriteria={setOrderCriteria} orderCriteria={orderCriteria} />;
};

export default RepositoryList;