// Endpoint: http://127.0.0.1:8000/api/recipes/
// GET request to get all recipes
// POST request to create a new recipe

import { useEffect, useState } from "react";
import { BASE_API_URL } from "./constants";

type RecipeApiResponse = {
  id: number;
  image: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  servings: number | string;
  prep_time: number | string;
  cook_time: number | string;
  category: string;
  difficulty: string;
};

export const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeApiResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_API_URL);
        if (!response.ok) {
          const errorData = await response.text;
          throw new Error(`API request failed ${errorData}`);
        }
        const data: RecipeApiResponse[] = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes", error);
        setError(true);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return { recipes, loading, error };
};
