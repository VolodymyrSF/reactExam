import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import {IMovie} from "../interfaces/movieInterface";
import {genreService} from "../services/genreService";
import {GenredMovies} from "../components/Movies/GenredMovies";
import css from "./genredListedPage.module.css"

const GenreListedPage = () => {
    const {id}=useParams()

    const [genredMovies,setGenredMovies]=useState<{page: number | null, results: IMovie[]}>({page: null, results: []});

    useEffect(()=>{
        genreService.getById(+id).then(({data})=>setGenredMovies({page:data.page,results:data.results}))
    },[id])
    return (
        <div className={css.mainDiv}>
            {genredMovies.results.map(genredMovies=><GenredMovies key={genredMovies.id} genredMovies={genredMovies}/>)}
        </div>
    );
};

export {GenreListedPage};