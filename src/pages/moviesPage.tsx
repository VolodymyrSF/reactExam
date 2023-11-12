import React from 'react';
import {Outlet} from "react-router-dom";
import {Movies} from "../components/Movies/Movies";

const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Movies/>
        </div>
    );
};

export {MoviesPage};