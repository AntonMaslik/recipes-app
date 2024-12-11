import React, { useState } from "react";

import "@components/RecipeList/index.scss";
import { RecipeCard } from "@components/RecipeCard";

interface Recipe {
  title: string;
  description: string;
}

export const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    { title: "Recipe 1", description: "Описание рецепта 1" },
    { title: "Recipe 2", description: "Описание рецепта 2" },
  ]);

  const addRecipe = () => {
    const newRecipe: Recipe = {
      title: "New Recipe",
      description: "Описание нового рецепта",
    };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <>
      <button className="add-button" onClick={addRecipe}>
        Add recipe
      </button>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeList;
