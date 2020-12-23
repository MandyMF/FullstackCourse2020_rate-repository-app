import { useContext } from 'react';
import {useMutation, useApolloClient} from '@apollo/react-hooks';
import {GET_AUTHORIZATION} from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () =>{
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(GET_AUTHORIZATION);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const response = await mutate({variables: {username, password}});   
    await authStorage.setAccessToken(response.data.authorize.accessToken);
    apolloClient.resetStore();

    return response;
  };

  return [signIn, result];
};

export default useSignIn;
