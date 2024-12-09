import { FetchResult } from "@apollo/client";

import {
  REGISTER_MUTATION,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
} from "@apollo-custom/mutations/auth-mutations";
import { apolloClient } from "@apollo-custom/apollo-client";
import { SignUpDTO } from "@custom-types/sign-up.dto";
import { SignInDTO } from "@custom-types/sign-in.dto";
import { Tokens } from "@custom-types/tokens";
import { GET_ME_QUERY } from "@apollo-custom/queries/user-queries";
import { User } from "@custom-types/user";

const authService = {
  signUp: async (input: SignUpDTO): Promise<Tokens> => {
    const response: FetchResult = await apolloClient.mutate({
      mutation: REGISTER_MUTATION,
      variables: { input },
    });

    return response.data?.signUp;
  },

  signIn: async (input: SignInDTO): Promise<Tokens> => {
    const response: FetchResult = await apolloClient.mutate({
      mutation: LOGIN_MUTATION,
      variables: { input },
    });

    return response.data?.signIn;
  },

  logout: async (): Promise<boolean> => {
    const response: FetchResult = await apolloClient.mutate({
      mutation: LOGOUT_MUTATION,
    });

    return response.data?.logout;
  },

  getMe: async (): Promise<User> => {
    const response: FetchResult = await apolloClient.query({
      query: GET_ME_QUERY,
    });

    return response.data?.getMe;
  },
};

export default authService;
