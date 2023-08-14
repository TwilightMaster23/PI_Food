import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPES = "FILTER_RECIPES";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const GET_DIETS = "GET_DIETS";
export const FILTER_BY_DIET = "FILTER_BY_DIET";

const URL = 'http://localhost:3001'

export const getRecipes = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`${URL}/recipes`)
            return dispatch({
                type: GET_RECIPES,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getRecipeByName = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`${URL}/recipes?name=${name}`)
            return dispatch({
                type: GET_RECIPE_BY_NAME,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getRecipeById = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`${URL}/recipes/${id}`)
            return dispatch({
                type: GET_RECIPE_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const cretaRecipe = (payload) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`${URL}/recipes/create`, payload)
            return dispatch({
                type: CREATE_RECIPE,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterRecipes = (filterValue) => {
    return {
        type: FILTER_RECIPES,
        payload: filterValue
    }
}

export const sortByName = (payload) => {
    return {
        type: SORT_BY_NAME,
        payload
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`${URL}/diets`)
            return dispatch({
                type: GET_DIETS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterByDiet = (diet) => {
    return {
        type: FILTER_BY_DIET,
        payload: diet
    }
}