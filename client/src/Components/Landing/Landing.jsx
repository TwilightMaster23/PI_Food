import style from './Landing.module.css';
import { Link } from 'react-router-dom';

export default function Landing () {
    return(
        <div className={style.container}>
            <Link to="/home">
            <button>INGRESAR</button>
            </Link>
        </div>
    )
}