export type RecipeApiResponse = {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string;
  instructions: string;
  difficulty: string;
  servings: number;
  prep_time: number;
  cook_time: number;
  category: string;
};
