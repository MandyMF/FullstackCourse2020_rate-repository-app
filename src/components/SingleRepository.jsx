import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import theme from '../theme';
import RepositoryInfo from '../components/RepositoryInfo';
import ReviewItem from '../components/ReviewItem';

import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';
import { useParams } from 'react-router-native';
import ItemSeparator from './ItemSeparator';

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.colors.listItemBackgroundColor,
    padding: 15,
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15
  },
  tag: {
    color: theme.colors.tabLabel,
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
    textAlign: 'center',
  }
});

/*
const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
};

const ReviewItem = ({ review }) => {
  // Single review item
};
*/

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY_BY_ID, { fetchPolicy: 'cache-and-network', variables: { id: id } });

  const reviews = !loading
    ? data?.repository.reviews.edges.map(edge => edge.node)
    : [];

  return (
    !loading && <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <><RepositoryInfo repository={data?.repository}
      /><ItemSeparator /></>}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;