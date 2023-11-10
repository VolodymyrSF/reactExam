
import {NavLink} from "react-router-dom";
import css from "./Header.module.css"
const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'movie'}>Movies</NavLink>
            <NavLink to={'genre'}>Genre</NavLink>
            <NavLink to={'movie/search'}>Search</NavLink>
        </div>
    );
};

export {Header};