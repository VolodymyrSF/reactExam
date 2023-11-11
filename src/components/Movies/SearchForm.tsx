import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IQuery} from "../../interfaces/queryInterface";
import {searchService} from "../../services/searchService";
import {IMovie} from "../../interfaces/movieInterface";
import {SearchedMovies} from "./SearchedMovies";
import css from "./Movies.module.css";

interface IProps{

}
const SearchForm: FC<IProps> = () => {
    const { reset, register, handleSubmit } = useForm<IQuery>({
        mode: "onBlur",
    });

    const [searchedMovies, setSearchedMovies] = useState<{ page: number | null; results: IMovie[] }>({
        page: null,
        results: [],
    });
    const [page, setPage] = useState<number>(1);
    const [searchTitle, setSearchTitle] = useState<string>('');

    const search: SubmitHandler<IQuery> = async (query) => {
        const title = query.title || searchTitle;
        await searchService.getSearch({ query: title, page }).then(({ data }) => {
            setSearchedMovies({ page: page, results: data.results });
        });

        setSearchTitle(title);
        reset();
    };

    const getNextPage = async () => {
        const nextPage = page + 1;
        await searchService.getSearch({ query: searchTitle, page: nextPage }).then(({ data }) => {
            setSearchedMovies({ page: nextPage, results: data.results });
        });
        setPage(nextPage);
        reset();
    };

    const getPreviousPage = async () => {
        const prevPage = page - 1;
        await searchService.getSearch({ query: searchTitle, page: prevPage }).then(({ data }) => {
            setSearchedMovies({ page: prevPage, results: data.results });
        });
        setPage(prevPage);
        reset();
    };

    console.log(searchedMovies);

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type={"text"} placeholder={'Введіть назву фільму'} {...register('title')} />
                <button>Search</button>
            </form>
            {searchedMovies && searchedMovies.results && searchedMovies.results.map((searchedMovie) => (
                <SearchedMovies key={searchedMovie.id} searchedMovie={searchedMovie} />
            ))}
            <button disabled={page === 1} onClick={getPreviousPage}>
                Previous Page
            </button>
            <div className={css.pageDiv}>Current Page: {page}</div>
            <button disabled={page > 500} onClick={getNextPage}>
                Next Page
            </button>
        </div>
    );
};

export { SearchForm };