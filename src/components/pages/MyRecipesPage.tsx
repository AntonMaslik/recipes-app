import { Helmet } from "react-helmet";

import "@components/pages/styles/recipes.scss"

import { RecipeList } from "@components/RecipeList/index"

export const MyRecipesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>My recipes</title>
      </Helmet>
      <div className="container-recipe">
        <RecipeList/>
      </div>
    </>
  );
};
