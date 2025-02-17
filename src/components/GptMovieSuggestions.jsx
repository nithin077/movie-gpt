import React from "react";
import { useSelector } from "react-redux";
import MovieSection from "./MovieSection";

const GptMovieSuggestions = () => {
  const { gptMovies, tmdbResults } = useSelector((store) => store.gpt);
  if (!gptMovies) return null;
  if(!tmdbResults) return null;

  return (
    <div className="m-6 px-6 bg-slate-700">
      <div>
        {gptMovies.map((movieName, index) => (
          <MovieSection
            key={movieName}
            title={movieName}
            movies={tmdbResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
