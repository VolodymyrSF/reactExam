import React, {FC} from 'react';

import {IMovieDetails} from "../../interfaces/movieDetailsInterface";
import {imgURL} from "../../urls/imgURL";

interface IProps{
    movieDetails:IMovieDetails
}
const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {title,poster_path}=movieDetails
    return (
        <div>
            <div><img src={imgURL+poster_path} alt={title}/></div>
            <div>{title}</div>
        </div>
    );
};

export {MovieDetails};