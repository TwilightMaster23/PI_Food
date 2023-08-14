import { 
    GET_RECIPES,
    GET_RECIPE_BY_NAME,
    GET_RECIPE_BY_ID,
    CREATE_RECIPE,
    FILTER_RECIPES,
    SORT_BY_NAME,
    GET_DIETS,
    FILTER_BY_DIET
 } from "./actions";

const initialState = {
    recipes: [],
    allRecipes: [],
    recipeDetail: {},
    diets: []
}

function rootReducer (state = initialState, {type, payload}) {
    switch(type){
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }

        case GET_RECIPE_BY_NAME:
            return {
                ...state,
                recipes: payload
            }    
        
        case GET_RECIPE_BY_ID:
            return {
                ...state,
                recipes: payload
            }

        case CREATE_RECIPE:
            return {
                ...state
            }

        case GET_DIETS:
            return {
                ...state,
                diets: payload
            }
        
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;