import { gql } from 'apollo-boost';
import {BasicRepository, ExtendedRepository} from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword ) {
      edges{
        node{
          ...BasicRepository
        }
      }
    }
  }

  ${BasicRepository}
`;

export const AUTHORIZED_USER = gql`
  query authorizedUser
  {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query GetRepositoryById($id: ID!) {
    repository(id: $id) {
      ...ExtendedRepository
    }
  }

  ${ExtendedRepository}
`;