import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation SignUp($input: SignUpDTO!) {
    signUp(input: $input) {
      accessToken
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation SignIn($input: SignInDTO!) {
    signIn(input: $input) {
      accessToken
    }
  }
`;

export const REFRESH_TOKEN_MUTATION = gql`
  mutation Refresh {
    refresh {
      accessToken
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Mutation {
    logout
  }
`;
