import React, {FC} from 'react';

import {Ig} from "../../interfaces/genreInterface";

interface IProps{
    genreName:Ig
}
const GenresMovieNames:FC<IProps> = ({genreName}) => {
    return (
        <div>
            {genreName.name}
        </div>
    );
};

export {GenresMovieNames};