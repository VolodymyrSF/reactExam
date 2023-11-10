import React, {useEffect, useState} from 'react';

import {Ig} from "../../interfaces/genreInterface";
import {genreService} from "../../services/genreService";
import {Genre} from "../Genre/Genre";
import css from "./Genres.module.css"

const Genres = () => {
    const [genres,setGenres]=useState<{genres:Ig[]}>({genres:[]})

    useEffect(()=>{
        genreService.getAll().then(({data})=>setGenres({genres:data.genres}))
    },[])

    return (
        <div className={css.bigDiv}>
            {genres.genres.map(genre=><Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};