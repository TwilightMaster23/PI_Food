import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { getRecipes, getRecipeByName, getRecipeById, cretaRecipe, filterRecipes, sortByName, getDiets, filterByDiet } from "../../redux/actions";
import SearchBar from '../SearchBar/SearchBar';
import Paginado from "../Paginado/Paginado";
import CardRecipe from "../CardRecipe/CardRecipe";

    export default function Home () {

        const dispatch = useDispatch();

        const recipes = useSelector((state) => state.recipes)
        const diets = useSelector((state) => state.diets)
        const [currentPage, setCurrentPage] = useState(1)
        const [order, setOrder] = useState("")
        const recipesPerPage = 9

        const indexOfLastRecipe = currentPage * recipesPerPage;
        const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

        let currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
        
        const paginado = (pageNumber) => {
            setCurrentPage(pageNumber);
        }

        useEffect(() => {
            dispatch(getRecipes());
            dispatch(getDiets());
        }, [dispatch]);

        return (
            <div>
                <SearchBar/>
                <Link to="/recipe/create">
                    <button>Create Recipe</button>
                </Link>
                <Paginado
                    recipesPerPage={recipesPerPage}
                    recipes={recipes.length}
                    paginado={paginado}
                />
                <div>
                    {currentRecipes?.map(e => {
                        return (
                            <CardRecipe
                            id={e.id}
                            image={e.image}
                            name={e.name}
                            diets={e.diets}
                            healthScore={e.healthScore}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }