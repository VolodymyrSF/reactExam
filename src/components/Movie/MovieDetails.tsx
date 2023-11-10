import React, {FC} from 'react';

import {IMovieDetails} from "../../interfaces/movieDetailsInterface";
import {imgURL} from "../../urls/imgURL";
import {GenresMovieNames} from "../Genres/GenresMovieNames";

interface IProps{
    movieDetails:IMovieDetails
}
const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {title,poster_path,overview}=movieDetails
    return (
        <div>
            <div><img src={imgURL+poster_path} alt={title}/></div>
            <div>{title}</div>
            <div>{overview}</div>
            {movieDetails.genres.map(genre=><GenresMovieNames key={genre.id} genreName={genre}/>)}
        </div>
    );
};

export {MovieDetails};