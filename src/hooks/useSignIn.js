import {useMutation} from '@apollo/react-hooks';
import {GET_AUTHORIZATION} from '../graphql/mutations';

const useSignIn = () =>{
  const [mutate, result] = useMutation(GET_AUTHORIZATION);

  const signIn = async ({ username, password }) => {
    return await mutate({variables: {username, password}});    
  };

  return [signIn, result];
};

export default useSignIn;
