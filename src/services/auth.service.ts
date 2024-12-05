import { FetchResult } from "@apollo/client";

import {
  REGISTER_MUTATION,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
} from "@apollo-custom/mutations/auth-mutations";
import { apolloClient } from "@apollo-custom/apollo-client";
import { SignUpDTO } from "@apollo-custom/types/sign-up.dto";
import { SignInDTO } from "@apollo-custom/types/sign-in.dto";
import { Tokens } from "@apollo-custom/types/tokens";

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

    localStorage.removeItem("accessToken");

    return response.data?.logout;
  },
};

export default authService;
