import {gql} from 'apollo-boost';

export const BasicRepository= gql`
  fragment BasicRepository on Repository{
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
  }
`;

export const ExtendedRepository= gql`
  fragment ExtendedRepository on Repository{
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
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
`;
