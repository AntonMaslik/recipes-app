import { IndexPage } from "@components/pages";
import { LoginPage } from "@components/pages/login";
import { RegisterPage } from "@components/pages/register";

export const routes = [
  {
    path: "/sign-up",
    element: <RegisterPage />,
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <IndexPage />,
  },
];
