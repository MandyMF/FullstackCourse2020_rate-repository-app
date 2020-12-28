import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';
import ItemDescriptionInfo from './ItemDescriptionInfo';
import ItemScoreInfo from './ItemScoreInfo';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.colors.listItemBackgroundColor,
    padding: 15,
  },
});

const RepositoryItem = ({ item }) => {

  return (
    <Link to={`/${item.id}`} component={TouchableOpacity}>
      <View testID='repositoryListItem' style={styles.content}>
        <ItemDescriptionInfo item={item} />
        <ItemScoreInfo item={item} />
      </View>
    </Link>
  );
};

export default RepositoryItem;