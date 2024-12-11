import { gql } from "@apollo/client";

export const GET_ME_QUERY = gql`
  query GetMe {
    getMe {
      id
      name
      email
      roles
      password
      createdAt
      updatedAt
    }
  }
`;
