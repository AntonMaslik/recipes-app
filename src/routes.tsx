import { IndexPage } from "@components/pages";
import { RegisterPage } from "@components/pages/register";

export const routes = [
  {
    path: "/sign-up",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <IndexPage />,
  },
];
