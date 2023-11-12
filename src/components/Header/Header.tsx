import Switch from 'react-switch';
import {NavLink} from "react-router-dom";
import css from "./Header.module.css"
import {useTheme} from "../../hoc/ThemeContext";
import {userImgURL} from "../../urls/userImgURL";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={css.header}>
            <NavLink to={'movie'}>Movies</NavLink>
            <NavLink to={'genre'}>Genre</NavLink>
            <NavLink to={'movie/search'}>Search</NavLink>
            <label>
                <span >Light</span>
                <Switch className={css.switchDiv}
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                    onColor="#86d3ff"
                    offColor="#767676"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={40}
                />
                <span>Dark</span>
            </label>
            <img src={userImgURL} alt={'user'} className={css.userDiv}/>
        </div>
    );
};

export {Header};