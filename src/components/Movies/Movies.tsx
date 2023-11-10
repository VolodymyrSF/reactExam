import React, {useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {Movie} from "../Movie/Movie";
import css from "./Movies.module.css"
import {onHidden} from "web-vitals/dist/modules/lib/onHidden";
const Movies = () => {
    const [movies,setMovies]=useState<{page: number | null, results: IMovie[]}>({page: null, results: []});
    const [page,setPage]=useState<number>(1);
    useEffect(()=>{
        movieService.getAll(page).then(({data}) => {
            setMovies({page: data.page, results: data.results});
        });
    }, [page]);
    const getNextPage=()=>{
        setPage(page+1);

    };
    const getPreviousPage=()=>{
        setPage(page-1);
    };

    return (
        <div className={css.bigDiv}>
            {movies.results.map(movie=><Movie key={movie.id} movie={movie}/>)}
            <div className={css.buttonDiv}>
            <button disabled={page==1} onClick={getPreviousPage}>Previous Page</button>
            <div className={css.pageDiv}>Current Page:{page}</div>
            <button disabled={page>500} onClick={getNextPage}>Next Page</button>
            </div>
        </div>
    );
};

export {Movies};