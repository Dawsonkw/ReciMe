import { useFetchRecipes } from "../lib/hooks";

function Recipes() {
  const { recipes, loading, error } = useFetchRecipes();
  return (
    <div className="flex flex-wrap justify-center">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="flex flex-col p-4 max-w-[25%]  ">
          <div className="flex-col ">
            <img src={recipe.image} alt={recipe.title} className="mx-auto" />
            <h2 className="justify-center items-center text-4xl text-center ">
              {recipe.title}
            </h2>
            <p className="text-wrap">{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>{recipe.servings}</p>
            <p>{recipe.prepTime}</p>
            <p>{recipe.cookTime}</p>
            <p>{recipe.category}</p>
            <p>{recipe.difficulty}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
