function Header() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-[200px] z-0 ">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-6xl text-white font-bold">
            <span className=" ">reci</span>Me
          </h1>
          <button className="bg-recipeAccent text-recipeStroke px-4 py-2 rounded-lg">
            Add Recipe
          </button>
        </div>
      </header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
        <input
          type="text"
          className="w-[750px] px-4 py-2 rounded-lg bg-recipeAccent text-recipeStroke ring-blue-900 "
          placeholder="Search for a recipe..."
        />
      </div>
    </div>
  );
}

export default Header;
