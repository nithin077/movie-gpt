import React from "react";
import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MoviePlayingMain from "./MoviePlayingMain";
import AllMovieList from "./AllMovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MoviePlayingMain />
          <AllMovieList />
        </>
      )}
    </div>
  );
};

export default Browse;
