import React, {FC} from 'react';

import {Ig} from "../../interfaces/genreInterface";
import {useNavigate} from "react-router-dom";
import css from "./Genre.module.css"

interface IProps{
    genre:Ig
}
const Genre:FC<IProps> = ({genre}) => {
    const navigate=useNavigate();
    const {name,id}=genre
    return (
        <div className={css.genresDiv} >
            <div onClick={()=>navigate(`${id}`) } className={css.genreDiv}>{name}</div>
        </div>
    );
};

export {Genre};