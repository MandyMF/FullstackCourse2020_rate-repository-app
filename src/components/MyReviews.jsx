import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import theme from '../theme';
import MyReviewItem from '../components/MyReviewItem';

import ItemSeparator from './ItemSeparator';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

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

const MyReviews = () => {
  const { authorizedUser, fetchMore } = useAuthorizedUser({ includeReviews: true, first: 6 });

  const reviews = authorizedUser ?
    authorizedUser.reviews.edges.map(edge => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  );
};

export default MyReviews;