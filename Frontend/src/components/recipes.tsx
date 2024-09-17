import { useEffect, useState } from "react";
import { useFetchRecipes } from "../lib/hooks";
import { RecipeApiResponse } from "../lib/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

function Recipes() {
  const { recipes: initialRecipes, loading, error } = useFetchRecipes();
  const [recipeList, setRecipeList] = useState<RecipeApiResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  useEffect(() => {
    if (initialRecipes) {
      setRecipeList(initialRecipes);
    }
  }, [initialRecipes]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  /////////Pagination Controls and Logic///////
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipeList.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(recipeList.length / recipesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-6 ">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2  "
        >
          <ArrowLeftIcon />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`${
              index + 1 === currentPage
                ? "bg-recipeAccent text-black"
                : "bg-gray-500 text-white"
            } px-4 py-2 mx-2 rounded-lg`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} className="px-4 py-2 mx-2">
          <ArrowRightIcon />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-between px-[20px] py-[20px] bg-gray-200">
        {currentRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="flex flex-col p-4 max-w-[30%] min-w-[30%]"
          >
            <div
              className="flex-col hover:scale-[1.03] active:scale-[1.02] transition duration-300 ease-in-out border-2 border-gray-500 p-4 rounded-md shadow-lg hover:shadow-xl bg-recipeAccent min-h-[1000px]"
              style={{ transformOrigin: "center", perspective: "1000px" }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="mx-auto max-w-[400px] min-w-[400px]"
              />
              <h2 className="justify-center items-center text-4xl text-center leading-normal">
                {recipe.title}
              </h2>
              <div className="text-wrap leading-normal border-b-4">
                {recipe.description}
                <p className="w-[30%] flex mx-auto justify-center items-center  p-4 m-4 bg-gray-200 bottom-10 ">
                  {recipe.category}
                </p>
              </div>
              <ul className="leading-normal mb-4">
                {recipe.ingredients.split(",").map((ingredient, index) => (
                  <li key={index}>
                    <span className="bullet">&#8226;</span> {ingredient.trim()}
                  </li>
                ))}
              </ul>
              <p className="border-b-4">{recipe.instructions}</p>
              <div className="leading-8">
                <div className="flex justify-between space-x-2">
                  <p>Difficulty: {recipe.difficulty} </p>
                  <p> {recipe.servings} servings </p>
                </div>
                <div className="p-4 "></div>
                <div className="flex justify-between">
                  <p>Prep time: {recipe.prep_time} minutes</p>
                  <p>Cook time: {recipe.cook_time} minutes</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 mb-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 mb-6  "
        >
          <ArrowLeftIcon />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`${
              index + 1 === currentPage
                ? "bg-recipeAccent text-black"
                : "bg-gray-500 text-white"
            } px-4 py-2 mx-2 rounded-lg mb-6`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} className="px-4 py-2 mx-2 mb-6">
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Recipes;
