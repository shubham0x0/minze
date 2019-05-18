import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($idToken: String!) {
    login(idToken: $idToken) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signup($idToken: String!) {
    signup(idToken: $idToken) {
      token
    }
  }
`;
