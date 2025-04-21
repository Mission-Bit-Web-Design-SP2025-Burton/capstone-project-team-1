async function getRecipes() {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

async function loadRecipeCards() {
  const recipes = await getRecipes();

  for (const recipe in recipes) {
    createRecipeCard(recipe);
  }
}

loadRecipeCards();
