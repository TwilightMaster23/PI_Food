const { getAllRecipes, recipeById, postRecipe} =  require('../controllers/recipeControllers');

const getRecipeById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const recipe = await recipeById(id)
        res.status(200).json(recipe)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


const getRecipeByName = async (req, res) => {
    const { name } = req.query
    const allRecipes = await getAllRecipes();

    try {
        if(!name) return res.status(200).json(allRecipes)
        const filterByName = allRecipes.filter((reci) => reci.name.toLowerCase().includes(name.toLowerCase()));
        if(filterByName.length === 0) return res.status(200).send(`No hay recetas con ese nombre: ${name}`)
        res.status(200).json(filterByName)
    } catch (error) {
        res.status(404).json({error: error.message});
    }

}

const createRecipe = async (req, res) => {
    try {
        const { name, image, summary, healthScore, steps, diets } = req.body
        const newRecipe = await postRecipe(name, image, summary, healthScore, steps, diets)
        res.status(200).send('La receta fue creada con exito')
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { getRecipeById, getRecipeByName, createRecipe };