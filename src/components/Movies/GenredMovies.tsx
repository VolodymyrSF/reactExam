import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {imgURL} from "../../urls/imgURL";

interface IProps{
    genredMovies:IMovie
}
const GenredMovies:FC<IProps> = ({genredMovies}) => {
    const {title,poster_path}=genredMovies
    return (
        <div>
            <img src={imgURL+poster_path} alt={title}/>
            {title}
        </div>
    );
};

export {GenredMovies};