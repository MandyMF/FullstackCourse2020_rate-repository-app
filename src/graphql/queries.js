import { gql } from 'apollo-boost';
import {BasicRepository} from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges{
        node{
          ...BasicRepository
        }
      }
    }
  }

  ${BasicRepository}
`;