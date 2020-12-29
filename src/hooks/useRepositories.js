import {GET_REPOSITORIES} from '../graphql/queries';
import {useQuery} from '@apollo/react-hooks';

const useRepositories = (orderCriteria) => {
  const {data, loading, refetch} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network', variables: orderCriteria
  });
  
  return {repositories: data?.repositories , loading, refetch};
};

export default useRepositories;