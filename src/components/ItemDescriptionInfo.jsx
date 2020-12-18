import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  content: {
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  imageContainer: {
    flexGrow: 1,
  },
  textContainer: {
    flexGrow: 1,
    width: '78%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5
  },
  tag: {
    color: theme.colors.tabLabel,
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    flexGrow: 0
  }

});

const ItemDescriptionInfo = ({ item }) => {
  return (
    <View style={styles.content}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
          uri: item.ownerAvatarUrl
        }} />
      </View>
      <View style={styles.textContainer}>
        <Text fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
        <Text color='textSecondary'>{item.description}</Text>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemDescriptionInfo;