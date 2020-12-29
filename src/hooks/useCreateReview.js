import {useMutation} from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';


const useCreateReview = () =>{
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async ({ 
    ownerName,
    repositoryName,
    rating,
    text
  }) => {
    const response = await mutate({variables: 
      {
        ownerName,
        repositoryName,
        rating,
        text
      }
      });   

    return response;
  };

  return [review, result];
};

export default useCreateReview;