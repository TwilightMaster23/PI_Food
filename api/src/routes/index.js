const { Router } = require('express');
const { getRecipeById, getRecipeByName, createRecipe } = require('../handlers/recipeHandlers')
const { getAllrecipes } = require('../controllers/recipeControllers');
const { getAllDiets } = require('../handlers/dietsHandlers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/recipes/:id', getRecipeById);
router.get('/recipes', getRecipeByName);
router.post('/recipes/create', createRecipe);
router.get('/diets', getAllDiets);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
