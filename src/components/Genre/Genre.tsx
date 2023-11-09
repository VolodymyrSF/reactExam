import React, {FC} from 'react';

import {Ig} from "../../interfaces/genreInterface";
import {useNavigate} from "react-router-dom";

interface IProps{
    genre:Ig
}
const Genre:FC<IProps> = ({genre}) => {
    const navigate=useNavigate();
    const {name,id}=genre
    return (
        <div>
            <div onClick={()=>navigate(`${id}`)}>{name}</div>
        </div>
    );
};

export {Genre};