import { useLazyQuery, useMutation } from "@apollo/client";

import {
  REGISTER_MUTATION,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
} from "@apollo-custom/mutations/auth-mutations";
import { GET_ME_QUERY } from "@apollo-custom/queries/user-queries";
import { SignUpDTO } from "@custom-types/sign-up.dto";
import { SignInDTO } from "@custom-types/sign-in.dto";
import { Tokens } from "@custom-types/tokens";

export const useSignUp = () => {
  const [mutate, { data, loading, error }] = useMutation<{ signUp: Tokens }>(
    REGISTER_MUTATION
  );

  const signUp = async (input: SignUpDTO): Promise<Tokens | null> => {
    const response = await mutate({ variables: { input } });

    return response.data?.signUp ?? null;
  };

  return { signUp, data, loading, error };
};

export const useSignIn = () => {
  const [mutate, { data, loading, error }] = useMutation<{ signIn: Tokens }>(
    LOGIN_MUTATION
  );

  const signIn = async (input: SignInDTO): Promise<Tokens | null> => {
    const response = await mutate({ variables: { input } });

    return response.data?.signIn ?? null;
  };

  return { signIn, data, loading, error };
};

export const useLogout = () => {
  const [mutate, { data, loading, error }] = useMutation<{ logout: boolean }>(
    LOGOUT_MUTATION
  );

  const logout = async (): Promise<boolean | null> => {
    const response = await mutate();

    return response.data?.logout ?? null;
  };

  return { logout, data, loading, error };
};

export const useGetMe = () => {
  const [getUser, { loading, data, error, refetch }] =
    useLazyQuery(GET_ME_QUERY);

  return { getUser, data, loading, error, refetch };
};
