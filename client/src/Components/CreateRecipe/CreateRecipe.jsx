import { useState } from "react";
import validation from "./Validations";
import style from './CreateRecipe.module.css'

export default function CreateRecipe (cretaRecipe) {
    const [userData, setUserData] = useState({
        name: "",
        summary: "",
        healthScore: "",
        steps: "",
        image: "",
        diets: []
    })

    const [errors, setErrors] = useState({});

    function handleChange(event) {
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        cretaRecipe(userData)
}
    return (
        <div>
            <form className={style.container} onSubmit={handleSubmit}>
                <label htmlFor="Name">
                    Name:
                    <input type="text" id="name" value={userData.name} name="name" onChange={handleChange} className={errors.name && style.warning} />
                </label>
                {errors.name && (<p className={style.danger}>{errors.name}</p>)}
                <label htmlFor="Summary">
                    Summary:
                    <input type="text" id="summary" value={userData.summary} name="summary" onChange={handleChange} className={errors.summary && style.warning} />
                </label>
                {errors.summary && (<p className={style.danger}>{errors.summary}</p>)}
                <label htmlFor="HealthScore">
                    HealthScore:
                    <input type="number" id="healthScore" value={userData.healthScore} name="healthScore" onChange={handleChange} className={errors.healthScore && style.warning} />                    
                </label>
                {errors.healthScore && (<p className={style.danger}>{errors.healthScore}</p>)}
                <label htmlFor="steps">
                    Steps:
                    <input type="text" id="steps" value={userData.steps} name="steps" onChange={handleChange} className={errors.steps && style.warning} />
                </label>
                {errors.steps && (<p className={style.danger}>{errors.steps}</p>)}
                <label htmlFor="image">
                    Image:
                    <input type="url" id="image" value={userData.image} name="image" onChange={handleChange} className={errors.image && style.warning} />       
                </label>
                {errors.image && (<p className={style.danger}>{errors.image}</p>)}
                <label htmlFor="diets">
                    Diets:
                    <input type="text" id="diets" value={userData.diets} name="diets" onChange={handleChange} className={errors.diets && style.warning} />
                </label>
                {errors.diets && (<p className={style.danger}>{errors.diets}</p>)}
                <button type="submit">Create</button>
            </form>
        </div>
    )

}