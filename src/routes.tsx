import { IndexPage } from "@components/pages/IndexPage";
import { LoginPage } from "@components/pages/LoginPage";
import { LogoutPage } from "@components/pages/LogoutPage";
import { MyRecipesPage } from "@components/pages/MyRecipesPage";
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
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/my-recipes",
    element: <MyRecipesPage />,
  },
];
