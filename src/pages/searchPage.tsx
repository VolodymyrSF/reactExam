import React from 'react';

import {SearchForm} from "../components/Movies/SearchForm";
import {Outlet} from "react-router-dom";


const SearchPage= () => {
    return (
        <div>
            <SearchForm/>
        </div>
    );
};

export {SearchPage};