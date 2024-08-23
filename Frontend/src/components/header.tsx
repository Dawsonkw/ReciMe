import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  //Search feature not implemented, basic search functionality logs to console
  const handleSearch = () => {
    console.log(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="bg-gradient-to-b from-purple-500 to-purple-800 h-[200px] z-0 ">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className=" text-white font-bold mx-auto text-4xl mt-4">
            <span className="text-[24px]">🍽️</span> reci-
            <span className="text-6xl italic ">Me</span>
            <span className="text-[24px]"> 🍽️</span>
          </h1>
        </div>
      </header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
        <div className="relative w-[750px] ">
          <input
            type="text"
            className="w-[750px] px-6 py-4 rounded-md bg-recipeAccent text-recipeStroke focus-ring-2 focus:ring-recipeStroke focus:outline-none pr-12"
            placeholder="Search functionality is not currently implemented & logs to console"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 mt-4 mr-4 text-recipeStroke"
          >
            <MagnifyingGlassIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
