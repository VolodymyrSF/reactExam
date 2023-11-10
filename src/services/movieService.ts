
import {IMovies} from "../interfaces/movieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";
import {IRes} from "../types/iResType";
import {IMovieDetails} from "../interfaces/movieDetailsInterface";

const movieService={
    getAll:(page:number):IRes<IMovies> =>axiosService.get(urls.getMovie.base,{params:{page}}),
    getById:(id:number):IRes<IMovieDetails>=>axiosService.get(urls.getMovie.getById(id))
}

export {movieService}