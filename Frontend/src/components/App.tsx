import AddRecipe from "./addRecipe";
import Footer from "./footer";
import Header from "./header";

import Recipes from "./recipes";

function App() {
  return (
    <main className="bg-gray-200 text-black h-full font-recipeFont ">
      <Header />
      <AddRecipe
        onAddRecipe={function (): void {
          throw new Error("Error adding recipe");
        }}
      />
      <Recipes />

      <Footer />
    </main>
  );
}

export default App;
