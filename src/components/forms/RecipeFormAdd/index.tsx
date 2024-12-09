import React, { useState } from "react";
import "@components/forms/RecipeFormAdd/index.scss";

interface RecipeFormAddProps {
  onSubmit: (formData: RecipeFormAddData) => void;
}

interface RecipeFormAddData {
  title: string;
  name: string;
  body: string;
  ingredients: string;
  servingSize: number;
  cookingTime: string;
}

export const RecipeFormAdd: React.FC<RecipeFormAddProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RecipeFormAddData>({
    title: "",
    name: "",
    body: "",
    ingredients: "",
    servingSize: 0,
    cookingTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      name: "",
      body: "",
      ingredients: "",
      servingSize: 0,
      cookingTime: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Recipe title:</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Recipe name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Recipe body:</label>
        <textarea id="body" value={formData.body} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="servingSize">Serving size:</label>
        <input
          type="number"
          min={0}
          id="servingSize"
          value={formData.servingSize}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cookingTime">Cooking time:</label>
        <input
          type="text"
          id="cookingTime"
          value={formData.cookingTime}
          onChange={handleChange}
        />
      </div>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RecipeFormAdd;
