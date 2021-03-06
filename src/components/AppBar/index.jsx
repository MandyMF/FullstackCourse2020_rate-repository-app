import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import AppBarActionTab from './AppBarActionTab';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../../graphql/queries';
import AuthStorageContext from '../../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
    paddingBottom: 5,
  },

});

const AppBar = () => {
  const apolloClient = useApolloClient();
  const { data } = useQuery(AUTHORIZED_USER);
  const authStorage = useContext(AuthStorageContext);

  const onPressHandler = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' route='/' />

        {!data?.authorizedUser ?
          <>
            <AppBarTab text='Sign in' route='/signIn' />
            <AppBarTab text='Sign up' route='/signUp' />
          </>
          :
          <>
            <AppBarTab text='Create a review' route='/review' />
            <AppBarTab text='My reviews' route='/myReviews' />
            <AppBarActionTab text='Sign Out' onPressHandler={onPressHandler}></AppBarActionTab>
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;