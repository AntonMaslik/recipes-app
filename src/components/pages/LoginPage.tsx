import { Helmet } from "react-helmet";

import { LoginForm } from "@components/forms/LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};
