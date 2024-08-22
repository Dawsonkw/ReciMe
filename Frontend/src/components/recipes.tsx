import { useFetchRecipes } from "../lib/hooks";

function Recipes() {
  const { recipes, loading, error } = useFetchRecipes();
  return (
    <div className="flex flex-wrap  gap-4 justify-between  px-[20px] py-[20px] bg-gray-200">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="flex flex-col p-4 max-w-[30%] ">
          <div
            className="flex-col hover:scale-105 active:scale-[1.02] transition duration-300 ease-in-out border-2 border-gray-500 p-4 rounded-md shadow-lg hover:shadow-xl  bg-recipeAccent min-h-[1000px]"
            style={{ transformOrigin: "center", perspective: "1000px" }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="mx-auto max-w-[400px]"
            />
            <h2 className="justify-center items-center text-4xl text-center  ">
              {recipe.title}
            </h2>
            <p className="text-wrap leading-8 border-b-4 ">
              {recipe.description}
            </p>
            <ul className="leading-8 ">
              {recipe.ingredients.split(",").map((ingredient, index) => (
                <li key={index}>
                  <span className="bullet">&#8226;</span> {ingredient.trim()}
                </li>
              ))}
            </ul>
            <p className="border-b-4">{recipe.instructions}</p>
            <div className="leading-8">
              <div className="flex justify-between">
                <p className=" underline">Difficulty: {recipe.difficulty}</p>
                <p className="underline">{recipe.servings} servings</p>{" "}
                <p className=" underline">{recipe.category}</p>
              </div>
              <div className="flex justify-between">
                <p>Prep time: {recipe.prep_time}</p>
                <p className=" ">Cook time: {recipe.cook_time} </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
