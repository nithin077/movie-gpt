import React, { useRef } from "react";
import language from "../sharedcomponents/MultiLanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openAi from "../sharedcomponents/OpenAI";
import { API_OPTIONS } from "../sharedcomponents/Constant";
import { addGptMovieResults } from "../sharedcomponents/GptSlice";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.language);
  const inpuSearchText = useRef(null);
  const dispatch = useDispatch();

  //Searched movie Fetching from TMDB
  const searchMovieFromTMDB = async (movieName) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    try {
      //Make OpenAI API call to get result
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for query" +
        inpuSearchText.current.value +
        ". Only give me names of 5 movies, comma separated like the example result given head, Example result : Sholay,Devara, Game changer";
      const gptresults = await openAi.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-4o-mini",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      });
      if (!gptresults.choices) return;
      const gptSearchedMovies = gptresults.choices[0].message.content.split(",");
      const promisesArray = gptSearchedMovies.map((movie) => searchMovieFromTMDB(movie));
      const tmdbApiResults = await Promise.all(promisesArray);
      dispatch(addGptMovieResults({gptMovies : gptSearchedMovies,tmdbResults : tmdbApiResults}));
    } catch (error) {
      // Handle the error based on your application's needs
      alert(
        "An error occurred while fetching movie recommendations. Please try again later."
      );
    }
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-inherit grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inpuSearchText}
          type="text"
          placeholder={language[selectedLanguage].gptSearchPlaceholder}
          className="p-4 m-3 col-span-9 border border-black"
        />
        <button
          className="py-2 px-4 m-3 bg-blue-500 rounded-md text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {language[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
