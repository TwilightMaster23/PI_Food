import React from "react";
import style from "./CardRecipe.module.css";
import { Link } from "react-router-dom";

export default function CardRecipe({name, image, healthScore, diets, id}) {
    return(
        <div className={style.container}>
            {/* <h2>Id: {id}</h2> */}
            <img src={image} alt="img"/>
            <h2 className={style.details}>{name}</h2>
            <p className={style.text}>HealthScore : {healthScore}</p>
            <p className={style.text}>Diets: {diets.join(" - ")}</p>
            <Link to={`/recipes/${id}`}><button className={style.button}>More Info</button></Link>
        </div>
    )
}