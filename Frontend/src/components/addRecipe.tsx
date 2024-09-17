import { useState } from "react";
import { useAddRecipe } from "../lib/hooks";
import { RecipeApiResponse } from "../lib/types";

type AddRecipeProps = {
  onAddRecipe: (newRecipe: RecipeApiResponse) => void;
  onClose: () => void;
};

function AddRecipe({ onAddRecipe, onClose }: AddRecipeProps) {
  const { addRecipe, loading, error, success } = useAddRecipe(() => {
    onClose();
  });

  ///////empty form data///////
  const initialFormData = {
    id: 0,
    title: "",
    description: "",
    image: "",
    ingredients: "",
    instructions: "",
    difficulty: "",
    servings: "",
    prep_time: "",
    cook_time: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  ///////Handlers for form input///////
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const recipeData = {
      ...formData,
      image: "https://via.placeholder.com/650",
      servings: parseInt(formData.servings),
    };
    try {
      const newRecipe = await addRecipe(recipeData);
      if (newRecipe) {
        onAddRecipe(newRecipe);
        setFormData(initialFormData);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error adding recipe", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto mt-8 p-6 bg-white rounded-xl shadow-xl border-2 border-gray-500"
    >
      <h1 className="text-gray-700 text-[16px] mb-4 font-semibold ">
        Submit your favorite recipe to reciMe or browse our catalog of user
        submitted recipes!
      </h1>
      <div className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Recipe Title"
            onChange={handleChange}
            value={formData.title}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Write a short description of the recipe"
            onChange={handleChange}
            value={formData.description}
            required
            rows={3}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700"
          >
            Ingredients
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            placeholder="Enter ingredients separated by commas"
            onChange={handleChange}
            value={formData.ingredients}
            required
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700"
          >
            Instructions
          </label>
          <textarea
            name="instructions"
            id="instructions"
            placeholder="Enter instructions for the recipe"
            onChange={handleChange}
            value={formData.instructions}
            required
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Main Course, Dessert, etc."
              onChange={handleChange}
              value={formData.category}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700"
            >
              Difficulty
            </label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              placeholder="Easy, Medium, Hard"
              onChange={handleChange}
              value={formData.difficulty}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="servings"
              className="block text-sm font-medium text-gray-700"
            >
              Servings
            </label>
            <input
              type="number"
              name="servings"
              id="servings"
              onChange={handleChange}
              value={formData.servings}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="prep_time"
              className="block text-sm font-medium text-gray-700"
            >
              Prep Time (min)
            </label>
            <input
              type="number"
              name="prep_time"
              id="prep_time"
              onChange={handleChange}
              value={formData.prep_time}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="cook_time"
              className="block text-sm font-medium text-gray-700"
            >
              Cook Time (min)
            </label>
            <input
              type="number"
              name="cook_time"
              id="cook_time"
              onChange={handleChange}
              value={formData.cook_time}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Adding Recipe..." : "Add Recipe"}
        </button>
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {success && (
        <p className="mt-2 text-sm text-green-600">
          Recipe added successfully!
        </p>
      )}
    </form>
  );
}

export default AddRecipe;
