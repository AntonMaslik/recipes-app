import { Helmet } from "react-helmet";

import { RegisterForm } from "@components/forms/RegisterForm";

export const RegisterPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};
