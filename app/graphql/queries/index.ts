import { gql } from 'apollo-boost';

export const FETCH_USER = gql`
  query {
    viewer {
      me {
        id
      }
    }
  }
`;

export const FETCH_TOP_RESTAURANTS = gql`
  query {
    topRestaurants {
      id
      name
      shortDescription
      description
      slug
      maxGuests
      numRatings
      avgPricePerPerson
      avgRating
      pictures {
        id
        url
      }
      reviews {
        value
      }
      location {
        id
        lat
        lng
      }
    }
  }
`;

export const SEARCH_RESTAURANT = gql`
  query {
    topRestaurants {
      id
      name
      shortDescription
      description
      slug
      maxGuests
      numRatings
      avgPricePerPerson
      avgRating
      pictures {
        id
        url
      }
      reviews {
        value
      }
      location {
        id
        lat
        lng
      }
    }
  }
`;

export const Query = (q: any) => gql`
  query {

  }
`;
