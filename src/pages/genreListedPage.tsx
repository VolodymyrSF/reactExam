import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import {IMovie} from "../interfaces/movieInterface";
import {genreService} from "../services/genreService";
import {GenredMovies} from "../components/Movies/GenredMovies";
import css from "./genredListedPage.module.css"

const GenreListedPage = () => {
    const {id}=useParams()

    const [genredMovies,setGenredMovies]=useState<{page: number | null, results: IMovie[]}>({page: null, results: []});
    const [page,setPage]=useState<number>(1);

    useEffect(()=>{
        genreService.getById(+id,page).then(({data})=>setGenredMovies({page:data.page,results:data.results}))
    },[id,page])

    const getNextPage=()=>{
        setPage(page+1);

    };
    const getPreviousPage=()=>{
        setPage(page-1);
    };

    return (
        <div>
        <div className={css.mainDiv}>
            {genredMovies.results.map(genredMovies=><GenredMovies key={genredMovies.id} genredMovies={genredMovies}/>)}
        </div>
            <div className={css.buttonDiv}>
                <button disabled={page===1} onClick={getPreviousPage}>Previous Page</button>
                <div className={css.pageDiv}>Current Page:{page}</div>
                <button disabled={page>500} onClick={getNextPage}>Next Page</button>
            </div>
        </div>
    );
};

export {GenreListedPage};