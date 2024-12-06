import { Helmet } from "react-helmet";

import { RecipeForm } from "@components/forms/RecipeForm";

import "@components/pages/styles/my-recipes.scss";

export const MyRecipesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>My recipes</title>
      </Helmet>
      <RecipeForm />
    </>
  );
};
