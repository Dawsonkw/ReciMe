import { useEffect, useState } from "react";
import { BASE_API_URL } from "./constants";
import { RecipeApiResponse } from "./types";

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

export const useAddRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const addRecipe = async (recipe: RecipeApiResponse) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(BASE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`API request failed ${errorData}`);
      }

      const data = await response.json();
      setSuccess(true);
      setLoading(false);
      return data;
    } catch (error) {
      console.error("Error adding recipe", error);
      setError(error instanceof Error ? error.message : "Something went wrong");
    }
  };
  return { addRecipe, loading, error, success };
};
