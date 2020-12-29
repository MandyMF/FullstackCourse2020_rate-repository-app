import {gql} from 'apollo-boost';

export const GET_AUTHORIZATION = gql`
  mutation login($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation Review ($repositoryName: String! , $ownerName: String!, $rating: Int!, $text: String){
    createReview(review:{repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text})
  	{
      id
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser ($username: String!, $password: String!){
    createUser(user: { username: $username, password: $password}){
      username
      createdAt
      reviewCount
    }
  }
`;

