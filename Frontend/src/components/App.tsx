import { useState } from "react";
import AddRecipe from "./addRecipe";
import Footer from "./footer";
import Header from "./header";
import Recipes from "./recipes";
import Modal from "./modal";
import { RecipeApiResponse } from "../lib/types";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddRecipe = (newRecipe: RecipeApiResponse) => {
    // Handle adding recipe logic here, e.g., updating state or refetching recipes
    console.log("New recipe added:", newRecipe);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-gray-200 text-black h-full font-recipeFont">
      <Header />
      <button
        onClick={() => setIsModalOpen(true)}
        className="mx-auto mt-4 block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        Add New Recipe
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddRecipe onAddRecipe={handleAddRecipe} onClose={handleCloseModal} />
      </Modal>
      <Recipes />
      <Footer />
    </main>
  );
}

export default App;
