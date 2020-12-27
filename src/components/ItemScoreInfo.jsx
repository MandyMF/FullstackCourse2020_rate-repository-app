import React from 'react';
import { View, StyleSheet } from 'react-native';
import Count from './Count';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});

const ItemScoreInfo = ({ item }) => {
  return (
    <View style={styles.content}>
      <Count testID='itemStarsCount' label='Stars' value={item.stargazersCount} />
      <Count testID='itemForksCount' label='Forks' value={item.forksCount} />
      <Count testID='itemReviewsCount' label='Reviews' value={item.reviewCount} />
      <Count testID='itemRatingCount' label='Rating' value={item.ratingAverage} />
    </View>
  );
};

export default ItemScoreInfo;