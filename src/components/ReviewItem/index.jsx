import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.listItemBackgroundColor,
    padding: 15,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    justifyContent: 'center',
    textAlign: 'center',
    height: 42,
    width: 42,
    borderRadius: 30,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    paddingBottom: 2
  },
  imageContainer: {
    flexGrow: 1,
    paddingRight: 10
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
  text: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  date: {
    paddingBottom: 6
  }

});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <View style={styles.image} >
            <Text style={styles.text}>{review.rating}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
          <Text style={styles.date} color='textSecondary'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;