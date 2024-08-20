import Footer from "./footer";
import Header from "./header";
import HeroRecipe from "./heroRecipe";
import Recipe from "./recipe";
import Recipes from "./recipes";

function App() {
  return (
    <main className="bg-[#fffffe] text-black h-screen">
      <Header />
      <HeroRecipe />
      <Recipes />
      <Recipe />
      <Footer />
    </main>
  );
}

export default App;
