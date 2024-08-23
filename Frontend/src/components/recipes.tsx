import { useEffect, useState } from "react";
import { useFetchRecipes } from "../lib/hooks";
import { RecipeApiResponse } from "../lib/types";

function Recipes() {
  const { recipes: initialRecipes, loading, error } = useFetchRecipes();
  const [recipeList, setRecipeList] = useState<RecipeApiResponse[]>([]);

  useEffect(() => {
    if (initialRecipes) {
      setRecipeList(initialRecipes);
    }
  }, [initialRecipes]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-wrap gap-4 justify-between px-[20px] py-[20px] bg-gray-200">
      {recipeList.map((recipe) => (
        <div
          key={recipe.id}
          className="flex flex-col p-4 max-w-[30%] min-w-[30%]"
        >
          <div
            className="flex-col hover:scale-105 active:scale-[1.02] transition duration-300 ease-in-out border-2 border-gray-500 p-4 rounded-md shadow-lg hover:shadow-xl bg-recipeAccent min-h-[1000px]"
            style={{ transformOrigin: "center", perspective: "1000px" }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="mx-auto max-w-[400px] min-w-[400px]"
            />
            <h2 className="justify-center items-center text-4xl text-center">
              {recipe.title}
            </h2>
            <p className="text-wrap leading-8 border-b-4">
              {recipe.description}
            </p>
            <ul className="leading-8">
              {recipe.ingredients.split(",").map((ingredient, index) => (
                <li key={index}>
                  <span className="bullet">&#8226;</span> {ingredient.trim()}
                </li>
              ))}
            </ul>
            <p className="border-b-4">{recipe.instructions}</p>
            <div className="leading-8">
              <div className="flex justify-between space-x-2">
                <p className="">Difficulty: {recipe.difficulty} </p>
                <p className=""> {recipe.servings} servings </p>
              </div>
              <p className="flex justify-center"> {recipe.category}</p>
              <div className="flex justify-between">
                <p>Prep time: {recipe.prep_time} minutes</p>
                <p>Cook time: {recipe.cook_time} minutes</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
