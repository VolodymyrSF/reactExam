import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MovieDetailsPage} from "./pages/movieDetailsPage";
import {GenrePage} from "./pages/genrePage";
import {GenreListedPage} from "./pages/genreListedPage";
import {SearchPage} from "./pages/searchPage";
import {MoviesPage} from "./pages/moviesPage";

let router=createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'movie'}/>},
            {path:'movie',element:<MoviesPage/>,children:[
                    {path:'search',element:<SearchPage/>}
                ]},
            {path:'movie/:id',element:<MovieDetailsPage/>},
            {path:'genre',element:<GenrePage/>},
            {path: `genre/:id`,element: <GenreListedPage/>},
            {path:'genre/:id/movies/:id',element:<MovieDetailsPage/>},
            {path:'movie/search/movies/:id',element:<MovieDetailsPage/>}
        ]}

])

export {router}