import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";
import {imgURL} from "../../urls/imgURL";
import StarRatings from "react-star-ratings";
import css from "../Movie/Movie.module.css"
import {notFoundURL} from "../../urls/notFoundURL";
interface IProps{
    searchedMovie:IMovie
}
const SearchedMovies:FC<IProps> = ({searchedMovie}) => {
    const navigate=useNavigate()
    const {id,poster_path,title,vote_average}=searchedMovie
    return (
        <div className={css.mainDiv}>
            <div onClick={()=>navigate(`movies/${id}`)} className={css.movieDiv}>
                {poster_path?(
                <img src={imgURL+poster_path} alt={title}/>
                ):(
                   <img src={notFoundURL} alt={'not found image'}/>
                )
                }
                <div className={css.titleDiv}>{title}</div>
                <StarRatings
                    rating={vote_average/2}
                    starDimension="20px"
                    starRatedColor="orange"
                />
            </div>
            </div>
    );
};

export {SearchedMovies};