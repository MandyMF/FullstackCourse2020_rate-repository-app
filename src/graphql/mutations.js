import {gql} from 'apollo-boost';

export const GET_AUTHORIZATION = gql`
  mutation login($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

