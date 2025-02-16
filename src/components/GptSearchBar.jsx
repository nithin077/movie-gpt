import React, { useRef } from "react";
import language from "../sharedcomponents/MultiLanguageConstants";
import { useSelector } from "react-redux";
import openAi from "../sharedcomponents/OpenAI";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.language);
  const inpuSearchText = useRef(null);

  const handleGptSearchClick = async () => {
    try {
            //Make OpenAI API call to get result
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for query"+inpuSearchText.current.value+". Only give me names of 10 movies, comma separated like the example result given head, Example result : Sholay,Devara, Game changer"
    const gptresults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptresults.choices)
    } catch (error) {
        // Handle the error based on your application's needs
        alert("An error occurred while fetching movie recommendations. Please try again later.");
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-inherit grid grid-cols-12"
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
