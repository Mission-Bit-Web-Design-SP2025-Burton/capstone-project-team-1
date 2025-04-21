document.body.onload = loadRecipeCards();

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

function createRecipeCard(recipe) {
  const recipeCard = document.createElement("article");
  const recipeImage = document.createElement("img");
  recipeImage.src =
    "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg";
  recipeImage.className = "";
}

async function loadRecipeCards() {
  const recipes = await getRecipes();

  for (const recipe in recipes) {
    createRecipeCard(recipe);
  }
}
