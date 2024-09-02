document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('recipeIngredients').value;
    
    const recipeContainer = document.getElementById('recipeContainer');
    const recipeCard = document.createElement('div');
    recipeCard.innerHTML = <h3>${name}</h3><p>${ingredients}</p>;
    recipeContainer.appendChild(recipeCard);

    // Clear the form
    document.getElementById('recipeForm').reset();
});