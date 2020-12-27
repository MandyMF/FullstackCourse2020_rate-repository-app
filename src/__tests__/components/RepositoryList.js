import React from 'react';
import { render, within } from '@testing-library/react-native';
import {RepositoryListContainer} from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const countValue = (value) => value >= 1000 ? (Math.round(value / 100) / 10) + 'k' : value;

      const {getAllByTestId} = render(<RepositoryListContainer repositories={repositories} />);

      //debug();
      const repositoryListItems = getAllByTestId('repositoryListItem');

      expect(repositoryListItems).toHaveLength(2);

      //expect(within(repositoryListItems[0]).getByTestId('itemFullName')).toHaveTextContent(repositories.edges[0].node.fullName);

      let n = 0;

      for(const component of repositoryListItems){
        expect(within(component).getByTestId('itemFullName')).toHaveTextContent(repositories.edges[n].node.fullName);
        expect(within(component).getByTestId('itemDescription')).toHaveTextContent(repositories.edges[n].node.description);
        expect(within(component).getByTestId('itemLanguage')).toHaveTextContent(repositories.edges[n].node.language);
        expect(within(component).getByTestId('itemStarsCount')).toHaveTextContent(countValue(repositories.edges[n].node.stargazersCount));
        expect(within(component).getByTestId('itemForksCount')).toHaveTextContent(countValue(repositories.edges[n].node.forksCount));
        expect(within(component).getByTestId('itemReviewsCount')).toHaveTextContent(countValue(repositories.edges[n].node.reviewCount));
        expect(within(component).getByTestId('itemRatingCount')).toHaveTextContent(countValue(repositories.edges[n].node.ratingAverage));

        n++;
      }
      /*
      const itemFullNameList = getAllByTestId('itemFullName');
      const itemDescriptionList = getAllByTestId('itemDescription');
      const itemLanguageList = getAllByTestId('itemLanguage');
      const itemStarsCountList = getAllByTestId('itemStarsCount');
      const itemForksCountList = getAllByTestId('itemForksCount');
      const itemReviewsCountList = getAllByTestId('itemReviewsCount');
      const itemRatingCountList = getAllByTestId('itemRatingCount');


      for(const n in [0,1])
      {
        expect(itemFullNameList[n]).toHaveTextContent(repositories.edges[n].node.fullName);
        expect(itemDescriptionList[n]).toHaveTextContent(repositories.edges[n].node.description);
        expect(itemLanguageList[n]).toHaveTextContent(repositories.edges[n].node.language);
        expect(itemStarsCountList[n]).toHaveTextContent(countValue(repositories.edges[n].node.stargazersCount));
        expect(itemForksCountList[n]).toHaveTextContent(countValue(repositories.edges[n].node.forksCount));
        expect(itemReviewsCountList[n]).toHaveTextContent(countValue(repositories.edges[n].node.reviewCount));
        expect(itemRatingCountList[n]).toHaveTextContent(countValue(repositories.edges[n].node.ratingAverage));
      }*/
    });
  });
});