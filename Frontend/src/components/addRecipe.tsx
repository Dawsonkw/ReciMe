import { useState } from "react";
import { useAddRecipe } from "../lib/hooks";
import { RecipeApiResponse } from "../lib/types";

type AddRecipeProps = {
  onAddRecipe: (newRecipe: RecipeApiResponse) => void;
};

const AddRecipe: React.FC<AddRecipeProps> = ({ onAddRecipe }) => {
  const { addRecipe, loading, error, success } = useAddRecipe();

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
      image: "https://via.placeholder.com/150",
    };
    try {
      const newRecipe = await addRecipe(recipeData);
      onAddRecipe(newRecipe);

      setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding recipe", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col items-center mx-auto border-2 border-gray-500 p-4 rounded-md shadow-lg bg-recipeAccent max-w-[30%]"
    >
      <div className="l">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={formData.title}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          value={formData.description}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          name="ingredients"
          id="ingredients"
          onChange={handleChange}
          value={formData.ingredients}
          required
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          name="instructions"
          id="instructions"
          onChange={handleChange}
          value={formData.instructions}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          onChange={handleChange}
          value={formData.category}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Difficulty:</label>
        <input
          type="text"
          name="difficulty"
          id="difficulty"
          onChange={handleChange}
          value={formData.difficulty}
          required
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          name="servings"
          id="servings"
          onChange={handleChange}
          value={formData.servings}
          required
        />
      </div>
      <div>
        <label htmlFor="prep_time">Prep Time:</label>
        <input
          type="number"
          name="prep_time"
          id="prep_time"
          onChange={handleChange}
          value={formData.prep_time}
          required
        />
      </div>
      <div>
        <label htmlFor="cook_time">Cook Time:</label>
        <input
          type="number"
          name="cook_time"
          id="cook_time"
          onChange={handleChange}
          value={formData.cook_time}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="border rounded-lg border-gray-500 bg-blue-500 p-2 text-white active:bg-blue-700"
      >
        {loading ? "Adding Recipe..." : "Add Recipe"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Recipe added successfully!</p>}
    </form>
  );
};

export default AddRecipe;
