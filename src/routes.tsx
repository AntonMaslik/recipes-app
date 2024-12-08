import { IndexPage } from "@components/pages/IndexPage";
import { LoginPage } from "@components/pages/LoginPage";
import { LogoutPage } from "@components/pages/LogoutPage";
import { MyRecipesPage } from "@components/pages/MyRecipesPage";
import { RegisterPage } from "@components/pages/RegisterPage";
import { PrivateRoute } from "@components/PrivateRoute";

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
    element: <PrivateRoute component={LogoutPage}/>,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/my-recipes",
    element: <PrivateRoute component={MyRecipesPage}/>,
  },
];
