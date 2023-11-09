import React, {FC} from 'react';

import css from "./Movie.module.css"
import {IMovie} from "../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";

import {imgURL} from "../../urls/imgURL";

interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {title,poster_path,id}=movie
    const navigate=useNavigate()
    return (
        <div>
            <div className={css.movieDiv} onClick={()=>navigate(`${id}`)}>
                <img src={imgURL+poster_path} alt={title}/>
                {title}
            </div>
        </div>
    );
};

export {Movie};