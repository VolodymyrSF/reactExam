
import {IRes} from "../types/iResType";
import {IGenre} from "../interfaces/genreInterface";
import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";
import {IMovies} from "../interfaces/movieInterface";

const genreService={
    getAll:():IRes<IGenre> =>axiosService.get(urls.getGenre.base),
    getById:(id:number,page:number):IRes<IMovies>=>axiosService.get(urls.getGenre.getById(id),{params:{page}})
}

export {genreService}