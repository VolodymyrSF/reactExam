import React, {useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const [movies,setMovies]=useState<{page: number | null, results: IMovie[]}>({page: null, results: []});

    useEffect(()=>{
        movieService.getAll().then(({data}) => setMovies({page: data.page, results: data.results}));
    }, []);

    return (
        <div>
            {movies.results.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};