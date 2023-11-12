import React, {FC} from 'react';

import {Ig} from "../../interfaces/genreInterface";

interface IProps{
    genreName:Ig
}
const GenresMovieNames:FC<IProps> = ({genreName}) => {
    const {name}=genreName
    return (
        <div>
            <div >{name}</div>
        </div>
    );
};

export {GenresMovieNames};