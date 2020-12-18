import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
});

const Count = ({ label, value }) => {
  return (
    <View style={styles.content}>
      <Text fontWeight='bold' fontSize='subheading'> {value >= 1000 ? (Math.round(value / 100) / 10) + 'k' : value}</Text>
      <Text color='textSecondary'>{label}</Text>
    </View>
  );
};

export default Count;