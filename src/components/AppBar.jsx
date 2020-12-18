import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },

});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='Repositories' />
    </View>
  );
};

export default AppBar;