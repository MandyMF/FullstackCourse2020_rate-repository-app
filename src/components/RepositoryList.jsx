import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import ItemSeparator from '../components/ItemSeparator';


export const RepositoryListContainer = ({ repositories }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    // other props
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;