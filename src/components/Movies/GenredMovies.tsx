import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {imgURL} from "../../urls/imgURL";
import css from "./GenredMovies.module.css"
import {useNavigate} from "react-router-dom";

interface IProps{
    genredMovies:IMovie
}
const GenredMovies:FC<IProps> = ({genredMovies}) => {
    const navigate=useNavigate()
    const {title,poster_path,id}=genredMovies
    return (
        <div className={css.oneMovieDiv} onClick={()=>navigate(`movies/${id}`)}>
            <img src={imgURL+poster_path} alt={title}/>
            <div className={css.titleDiv}>{title}</div>
        </div>
    );
};

export {GenredMovies};