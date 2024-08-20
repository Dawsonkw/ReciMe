function Recipe() {
  return (
    <main>
      <section
        className="w-[75%] flex justify-center items-center mx-auto my-4"
        style={{ border: "1px solid black" }}
      >
        <div className="flex flex-col justify-center items-center  ">
          <h2>Recipe Name</h2>
          <p>Recipe Description</p>
          <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
          <p>Instructions</p>
        </div>
      </section>
    </main>
  );
}

export default Recipe;
