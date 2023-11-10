import React from 'react';

import {Movies} from "../components/Movies/Movies";
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Movies/>
        </div>
    );
};

export {HomePage};