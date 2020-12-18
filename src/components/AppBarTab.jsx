import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  tabLabel: {
    color: theme.colors.tabLabel,
    fontWeight: theme.fontWeights.bold,
  },
  tab: {
    padding: 16
  }
});


const AppBarTab = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.tab}>
        <Text style={styles.tabLabel}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;