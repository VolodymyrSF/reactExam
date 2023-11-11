
import {NavLink} from "react-router-dom";
import css from "./Header.module.css"
import {useTheme} from "../../hoc/ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={css.header}>
            <NavLink to={'movie'}>Movies</NavLink>
            <NavLink to={'genre'}>Genre</NavLink>
            <NavLink to={'movie/search'}>Search</NavLink>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
};

export {Header};