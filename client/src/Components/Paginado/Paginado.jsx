import React from "react";
import style from "./Paginado.module.css";

export default function Paginado({recipesPerPage, recipes, paginado}) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(recipes / recipesPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav className={style.paginado}>
            <div className={style.container}>
                {pageNumbers && pageNumbers.map((number) => (
                    <div key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>
                    </div>
                ))}
            </div>
        </nav>
    )
}