function Header() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-800 h-[200px] z-0 ">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className=" text-white font-bold mx-auto text-4xl mt-4">
            🍽️ reci
            <span className="text-6xl">Me </span> 🍽️
          </h1>
        </div>
      </header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
        <input
          type="text"
          className="w-[750px] px-6 py-4 rounded-md bg-recipeAccent text-recipeStroke"
          placeholder="Search functionality is not currently implemented"
        />
      </div>
    </div>
  );
}

export default Header;
