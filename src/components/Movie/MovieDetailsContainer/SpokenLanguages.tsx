import React, {FC} from 'react';

import {ILanguages} from "../../../interfaces/movieDetailsInterface";
import css from "./SpokenLanguages.module.css"
interface IProps{
    language:ILanguages
}
const SpokenLanguages:FC<IProps> = ({language}) => {
    const {name}=language
    return (
        <div >
            <div className={css.langDiv}>{name}</div>
        </div>
    );
};

export {SpokenLanguages};