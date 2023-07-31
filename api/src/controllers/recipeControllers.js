require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Recipe, Diets } = require('../db');


const recipesApi = async () => {
  
    const {data: response } = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);
    
    const dataApi = response.results.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            steps: recipe.analyzedInstructions[0]?.steps.map((r) => {
                return r.step
            }),
            diets: recipe.diets
        }
    })
    return dataApi;
}

const recipesBdd = async () => {
    const dataBdd = await Recipe.findAll({
        include: {
            model: Diets,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    return dataBdd;
}

const getAllRecipes = async () => {
    const apiRecipes = await recipesApi();
    const bddRecipes = await recipesBdd();
    const allRecipes = apiRecipes.concat(bddRecipes);
    return allRecipes;
}

const recipeById = async (id) => {
    // const allRecipes = await getAllRecipes()
    // const idRecipe = await allRecipes.filter((reci) => reci.id == id);
    // if(idRecipe) return idRecipe
    // else throw new Error(`No existe receta con el ID: ${id}`);
    if(id.toString().length < 8) {
        // const recipeAPI = await recipesApi();
        const {data: recipeAPI} = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)

        const dataApi = {
                id: recipeAPI.id,
                name: recipeAPI.title,
                image: recipeAPI.image,
                summary: recipeAPI.summary,
                healthScore: recipeAPI.healthScore,
                steps: recipeAPI.analyzedInstructions[0]?.steps.map((r) => {
                    return r.step
                }),
                diets: recipeAPI.diets
            }
        
        return dataApi;
    } else {
        const recipeByIdBdd = await Recipe.findByPk(id)
        return recipeByIdBdd;
    }    
}

const postRecipe = async (name, image, summary, healthScore, steps, diets) => {
    if(!name || !summary || !healthScore || !steps) throw Error('Faltan datos')
    const newRecipe = await Recipe.create({
        name,
        image,
        summary,
        healthScore,
        steps,
        diets
    })

    const dietObjects = await Diets.findAll({
        where: {name: diets}
    })
    await newRecipe.addDiets(dietObjects)
    return newRecipe;
}

module.exports = {getAllRecipes, recipeById, postRecipe}