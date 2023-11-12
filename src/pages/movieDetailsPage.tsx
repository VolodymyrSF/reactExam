import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../services/movieService";
import {IMovieDetails} from "../interfaces/movieDetailsInterface";
import {MovieDetails} from "../components/Movie/MovieDetailsContainer/MovieDetails";


const MovieDetailsPage= () => {
    const {id}=useParams()

    const [movieDetails,setMovieDetails]=useState<IMovieDetails|null>(null);

    useEffect(()=>{
        movieService.getById(+id).then(({data})=>setMovieDetails(data))
    },[id])

    return (
        <div>
            {movieDetails && <MovieDetails  movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};