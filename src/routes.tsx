import { IndexPage } from "@components/pages/IndexPage";
import { LoginPage } from "@components/pages/LoginPage";
import { RegisterPage } from "@components/pages/RegisterPage";

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
