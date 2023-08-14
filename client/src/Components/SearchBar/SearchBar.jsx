import { useState } from "react";
import style from './SearchBar.module.css';
import { getRecipeByName } from "../../redux/actions";

export default function SearchBar () {
    const [name,setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

    function search () {
        getRecipeByName(name)
        setName("");
    }

    return (
        <div className={style.container}>
            <input type="search" onChange={handleChange} value={name} placeholder="Nombre de la receta"/>
            <button onClick={() => search()}>Buscar</button> 
        </div>
    )
}