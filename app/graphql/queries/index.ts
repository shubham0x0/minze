import gql from 'graphql-tag';

export const FETCH_USER = gql`
  query {
    viewer {
      me {
        id
      }
    }
  }
`;

export const Query = (q: any) => gql`
  query ${q}
`;
