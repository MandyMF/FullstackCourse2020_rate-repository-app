import { gql } from 'apollo-boost';
import {BasicRepository} from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first ) {
      edges{
        node{
          ...BasicRepository
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }

  ${BasicRepository}
`;

export const AUTHORIZED_USER = gql`
  query authorizedUser ($includeReviews: Boolean = false, $first: Int, $after: String)
  {
    authorizedUser {
      id
      username
      reviews( first: $first, after: $after)  @include(if: $includeReviews){
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query GetRepositoryById($id: ID!, $after: String, $first: Int) {
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
`;