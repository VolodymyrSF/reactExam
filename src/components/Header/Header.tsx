import React from 'react';

import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'movie'}>Movies</NavLink>
            <NavLink to={'genre'}>Genre</NavLink>
        </div>
    );
};

export {Header};