
import {IRes} from "../types/iResType";
import {IMovies} from "../interfaces/movieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const searchService = {
    getSearch: (params: { query: string; page: number }): IRes<IMovies> =>
        axiosService.get(urls.getSearch.base, { params: { query: params.query, page: params.page } }),
};



export {searchService}