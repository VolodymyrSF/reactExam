import React, {FC} from 'react';

import {ICompanies} from "../../../interfaces/movieDetailsInterface";
import {imgURL} from "../../../urls/imgURL";
import css from "./ProductionCompanies.module.css"
interface IProps{
    companie:ICompanies
}
const ProductionCompanies:FC<IProps> = ({companie}) => {
    const {logo_path,name,origin_country}=companie
    return (
        <div className={css.bigDiv}>
            {logo_path ?(
            <div className={css.imgDiv}><img src={imgURL+logo_path} alt={name}/></div>
            ):(<div className={css.imgDiv}><h3>Company haven't logo</h3></div>)
            }
            {name}
        </div>
    );
};

export {ProductionCompanies};