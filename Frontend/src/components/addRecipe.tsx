import { useState } from "react";
import { useAddRecipe } from "../lib/hooks";

const AddRecipe: React.FC = () => {
  const { addRecipe, loading, error, success } = useAddRecipe();

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    // image: "",
    ingredients: "",
    instructions: "",
    // difficulty: "",
    servings: "",
    prep_time: "",
    cook_time: "",
    // category: "",
  });

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
      //   image: { plate },
    };
    await addRecipe(recipeData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
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
      {/* <div>
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={handleChange}
          value={formData.difficulty}
          required
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div> */}
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
      {/* <div>
        <label htmlFor="category">Main Dish or salad</label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={formData.category}
          required
        >
          <option value="main">Main Dish</option>
          <option value="salad">Salad</option>
        </select>
      </div> */}
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

      <button type="submit" disabled={loading}>
        {loading ? "Adding Recipe..." : "Add Recipe"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Recipe added successfully!</p>}
    </form>
  );
};

export default AddRecipe;
