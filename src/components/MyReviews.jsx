import React from 'react';
import { FlatList, Alert } from 'react-native';
import MyReviewItem from '../components/MyReviewItem';
import { useHistory } from 'react-router-native';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';
import ItemSeparator from './ItemSeparator';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const MyReviews = () => {
  const { authorizedUser, fetchMore, refetch } = useAuthorizedUser({ includeReviews: true, first: 6 });
  const history = useHistory();

  const handleViewRepository = (repositoryId) => {
    history.push(`/${repositoryId}`);
  };

  const [mutate] = useMutation(DELETE_REVIEW);


  const handleDeleteReview = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
          onPress: () => {
            //do nothing
          },
          style: "cancel"
        },
        {
          text: "DELETE",
          onPress: async () => {
            await mutate({ variables: { id } });
            refetch();
          },
        }
      ],
      { cancelable: false }
    );
  };

  const reviews = authorizedUser ?
    authorizedUser.reviews.edges.map(edge => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReviewItem review={item}
        handleDeleteReview={() => handleDeleteReview(item.id)}
        handleViewRepository={() => handleViewRepository(item.repositoryId)} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  );
};

export default MyReviews;