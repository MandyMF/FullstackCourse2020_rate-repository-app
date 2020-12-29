import {GET_REPOSITORIES} from '../graphql/queries';
import {useQuery} from '@apollo/react-hooks';

const useRepositories = (orderCriteria, searchKeyword) => {
  const {data, loading, refetch} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network', variables: {...orderCriteria, searchKeyword}
  });
  
  return {repositories: data?.repositories , loading, refetch};
};

export default useRepositories;