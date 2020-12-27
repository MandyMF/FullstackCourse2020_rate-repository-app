import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, Text } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  tabLabel: {
    color: theme.colors.tabLabel,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
  tab: {
    padding: 16,
    flexGrow: 1
  }
});


const AppBarActionTab = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPressHandler}>
      <View style={styles.tab}>
        <Text style={styles.tabLabel}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarActionTab;