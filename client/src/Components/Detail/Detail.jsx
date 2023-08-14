import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

export default function Detail () {
    const {id} = useParams();

    const [recipeDetail, setRecipeDetail] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/recipes/${id}`)
        .then(({data}) => setRecipeDetail(data))
        .catch((error) => window.alert(`${error.message}`))

        return setRecipeDetail({})
    }, [id]);

    return (
        <div>
            <img src={recipeDetail.image} alt="img"/>
            <h2>Name: {recipeDetail.name}</h2>
            <h4>Summary: {recipeDetail.summary}</h4>
            <h4>HealthScore: {recipeDetail.healthScore}</h4>
            <h4>Step by Step: {recipeDetail.steps}</h4>
            <h4>Diets: {recipeDetail.diets? recipeDetail.diets.join(" - ") : ""}</h4>
        </div>
    )
}