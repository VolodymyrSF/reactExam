import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";
import {imgURL} from "../../urls/imgURL";

interface IProps{
    searchedMovie:IMovie
}
const SearchedMovies:FC<IProps> = ({searchedMovie}) => {
    const navigate=useNavigate()
    const {id,poster_path,title}=searchedMovie
    return (
            <div onClick={()=>navigate(`movies/${id}`)}>
                <img src={imgURL+poster_path} alt={title}/>
                <div>{title}</div>
            </div>
    );
};

export {SearchedMovies};