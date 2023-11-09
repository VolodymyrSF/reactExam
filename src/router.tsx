import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/homePage";
import {MovieDetailsPage} from "./pages/movieDetailsPage";
import {GenrePage} from "./pages/genrePage";
import {GenreListedPage} from "./pages/genreListedPage";

let router=createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'movie'}/>},
            {path:'movie',element:<HomePage/>},
            {path:'movie/:id',element:<MovieDetailsPage/>},
            {path:'genre',element:<GenrePage/>},
            {path: `genre/:id`,element: <GenreListedPage/>}
        ]}

])

export {router}