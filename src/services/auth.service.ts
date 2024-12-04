import { FetchResult } from "@apollo/client";

import {
  REGISTER_MUTATION,
  LOGIN_MUTATION,
} from "@apollo-custom/mutations/auth-mutations";
import { apolloClient } from "@apollo-custom/apollo-client";
import { SignUpDTO } from "@apollo-custom/types/sign-up.dto";
import { SignInDTO } from "@apollo-custom/types/sign-in.dto";
import { Tokens } from "@apollo-custom/types/tokens";

const authService = {
  signUp: async (input: SignUpDTO): Promise<Tokens> => {
    try {
      const response: FetchResult = await apolloClient.mutate({
        mutation: REGISTER_MUTATION,
        variables: { input },
      });

      return response.data?.signUp;
    } catch (error) {
      throw new Error("SignUp failed!");
    }
  },

  signIn: async (input: SignInDTO): Promise<Tokens> => {
    try {
      const response: FetchResult = await apolloClient.mutate({
        mutation: LOGIN_MUTATION,
        variables: { input },
      });

      return response.data?.signIn;
    } catch (error) {
      throw new Error("SignIn failed");
    }
  },
};

export default authService;
