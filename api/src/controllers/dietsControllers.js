const { Diets } = require('../db')
require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const dietsApi = async () => {
    const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)

    const apiDiets = response.data.results.map(reci => reci.diets).flat()

    let allDiets = [...new Set(apiDiets)]

    await allDiets.map(diet => Diets.findOrCreate({where: {name: diet}}))

    const createDiets = await Diets.findAll()

    return createDiets.map(diet => diet.name)
}

const dietsBdd = async () => {
    const BddDiets = await Diets.findAll({
        attributes: ['name'],
    })

    return BddDiets.map(diet => diet.name)
}


module.exports = {dietsApi, dietsBdd};