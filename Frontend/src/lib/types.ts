export type RecipeApiResponse = {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string;
  instructions: string;
  difficulty: string;
  servings: number;
  prep_time: number | string;
  cook_time: number | string;
  category: string;
};
