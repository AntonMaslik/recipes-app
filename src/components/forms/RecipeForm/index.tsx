import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schemeRecipe } from "./scheme-recipe";

import "@components/forms/RecipeForm/index.scss";

type RecipeFormValues = z.infer<typeof schemeRecipe>;

export const RecipeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeFormValues>({
    resolver: zodResolver(schemeRecipe),
  });

  const onSubmit = (data: RecipeFormValues) => {
    console.log("Recipe submitted:", data);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add recipe</h2>
        <div className="form-group">
          <label htmlFor="recipe-title">Recipe title:</label>
          <input type="text" {...register("title")}></input>
          {errors.title && <p className="error-msg">{errors.title.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="recipe-name">Recipe name:</label>
          <input type="text" id="recipeName" {...register("name")} />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="recipe-body">Recipe Body:</label>
          <textarea {...register("body")} />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            {...register("ingriditens", {
              setValueAs: (value: string) =>
                value.split(",").map((item) => item.trim()),
            })}
          />
          {errors.ingriditens && (
            <p className="error-msg">{errors.ingriditens.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="serving-size">Serving size:</label>
          <input type="number" id="serving" {...register("servingSize")} />
          {errors.servingSize && (
            <p className="error-msg">{errors.servingSize.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cooking-time">Cooking time:</label>
          <input type="text" id="cooking-time" {...register("cookingTime")} />
          {errors.cookingTime && (
            <p className="error-msg">{errors.cookingTime.message}</p>
          )}
        </div>

        <button type="submit">Save recept</button>
      </form>
  );
};
