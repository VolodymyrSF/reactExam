import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {useTheme} from "../hoc/ThemeContext";
import css from"./MainLayout.module.css"

const MainLayout = () => {
    const {theme,toggleTheme}=useTheme()
    return (
        <div  style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }} >
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};