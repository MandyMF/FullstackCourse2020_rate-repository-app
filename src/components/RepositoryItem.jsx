import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import ItemDescriptionInfo from './ItemDescriptionInfo';
import ItemScoreInfo from './ItemScoreInfo';

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.colors.listItemBackgroundColor,
    padding: 15,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.content}>
      <ItemDescriptionInfo item={item} />
      <ItemScoreInfo item={item} />
    </View>
  );
};

export default RepositoryItem;