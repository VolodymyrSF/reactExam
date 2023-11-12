import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {useTheme} from "../hoc/ThemeContext";


const MainLayout = () => {
    const {theme,toggleTheme}=useTheme()
    return (
        <div  style={{ background: theme === 'light' ? '#fff' : '#0c0b0b', color: theme === 'light' ? '#0c0b0b' : '#fff' }} >
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};