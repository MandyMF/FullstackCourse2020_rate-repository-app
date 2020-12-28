import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../theme';
import ItemDescriptionInfo from './ItemDescriptionInfo';
import ItemScoreInfo from './ItemScoreInfo';
import * as Linking from 'expo-linking';


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

const RepositoryInfo = ({ repository }) => {


  const onPressHandler = () => {
    Linking.openURL(repository?.url);
  };

  return (
    <View testID='repositoryListItem' style={styles.content}>
      <ItemDescriptionInfo item={repository} />
      <ItemScoreInfo item={repository} />
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.tagsContainer}>
          <Text testID='itemLanguage' style={styles.tag}>Open in GitHub</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RepositoryInfo;