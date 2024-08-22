import AddRecipe from "./addRecipe";
import Footer from "./footer";
import Header from "./header";

import Recipes from "./recipes";

function App() {
  return (
    <main className="bg-[#fffffe] text-black h-screen">
      <Header />
      <AddRecipe />
      <Recipes />

      <Footer />
    </main>
  );
}

export default App;
