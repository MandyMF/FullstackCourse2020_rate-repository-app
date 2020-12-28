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