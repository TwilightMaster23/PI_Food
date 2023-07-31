const { dietsApi, dietsBdd } = require('../controllers/dietsControllers')

const getAllDiets = async (req, res) => {
    try {
        let diets = await dietsBdd()

        if(diets.length === 0) {
            diets = await dietsApi();
        }

        res.status(200).json(diets)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllDiets };