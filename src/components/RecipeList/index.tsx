import "@components/RecipeList/index.scss";
import { Popup } from "reactjs-popup";
import React, { useState } from "react";

import { RecipeCard } from "@components/RecipeCard";
import { RecipeFormAdd } from "@components/forms/RecipeFormAdd";

interface Recipe {
  title: string;
  description: string;
}

export const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    { title: "Recipe 1", description: "Описание рецепта 1" },
    { title: "Recipe 2", description: "Описание рецепта 2" },
  ]);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleFormSubmit = (formData: {
    title: string;
    name: string;
    body: string;
    ingredients: string;
    servingSize: number;
    cookingTime: string;
  }) => {
    console.log("Form Data:", formData);
    closeModal();
  };

  return (
    <>
      <button className="add-button" onClick={() => setOpen((o) => !o)}>
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
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal-content">
          <h4>Add recipe</h4>
          <RecipeFormAdd onSubmit={handleFormSubmit} />
        </div>
      </Popup>
    </>
  );
};

export default RecipeList;
