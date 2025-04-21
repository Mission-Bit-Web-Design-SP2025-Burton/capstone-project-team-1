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
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function createRecipeCard(recipe) {
  const recipeCard = document.createElement("article");
  recipeCard.classList.add("recipe-card");

  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.strMealThumb;
  recipeImage.classList.add("recipe-card-image");

  const recipeName = document.createElement("h3");

  recipeName.classList.add("recipe-card-name");

  recipeName.textContent = recipe.strMeal;

  recipeCard.appendChild(recipeImage);
  recipeCard.appendChild(recipeName);

  console.log("recipeCard: ", recipeCard);

  const main = document.getElementsByTagName("main")[0];
  main.appendChild(recipeCard);
}

async function loadRecipeCards() {
  const { meals: recipes } = await getRecipes();

  console.log("recipes: ", recipes);

  for (const recipe of recipes) {
    console.log("recipe: ", recipe);
    createRecipeCard(recipe);
  }
}
