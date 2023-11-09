
import {IMovies} from "../interfaces/movieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";
import {IRes} from "../types/iResType";
import {IMovieDetails} from "../interfaces/movieDetailsInterface";

const movieService={
    getAll:():IRes<IMovies> =>axiosService.get(urls.getMovie.base),
    getById:(id:number):IRes<IMovieDetails>=>axiosService.get(urls.getMovie.getById(id))
}

export {movieService}