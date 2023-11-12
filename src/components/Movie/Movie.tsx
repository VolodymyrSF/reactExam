import React, {FC} from 'react';

import css from "./Movie.module.css"
import {IMovie} from "../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";
import {imgURL} from "../../urls/imgURL";
import StarRatings from "react-star-ratings";
interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {title,poster_path,id,vote_average,}=movie
    const navigate=useNavigate()
    return (
        <div className={css.mainDiv} onClick={()=>navigate(`${id}`)}>
            <div className={css.movieDiv}>
                <img src={imgURL+poster_path} alt={title}/>
                <StarRatings
                    rating={vote_average / 2}
                    starDimension="20px"
                    starRatedColor="orange"
                />
                <div className={css.titleDiv}>{title}</div>


            </div>
        </div>
    );
};

export {Movie};