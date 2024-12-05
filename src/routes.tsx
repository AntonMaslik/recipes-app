import { IndexPage } from "@components/pages/IndexPage";
import { LoginPage } from "@components/pages/LoginPage";
import { RegisterPage } from "@components/pages/RegisterPage";

export const routes = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];
