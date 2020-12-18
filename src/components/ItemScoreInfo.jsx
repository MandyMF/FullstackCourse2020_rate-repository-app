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
      <Count label='Stars' value={item.stargazersCount} />
      <Count label='Forks' value={item.forksCount} />
      <Count label='Reviews' value={item.reviewCount} />
      <Count label='Rating' value={item.ratingAverage} />
    </View>
  );
};

export default ItemScoreInfo;