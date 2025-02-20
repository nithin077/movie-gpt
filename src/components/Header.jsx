import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../sharedcomponents/Firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../sharedcomponents/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../sharedcomponents/Constant";
import { toggleGptSearchView } from "../sharedcomponents/GptSlice";
import { changeLanguage } from "../sharedcomponents/ConfigSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHeartAdd2Line } from "react-icons/ri";
import { Link } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const watchListMovies = useSelector(store => store.movies?.watchListMovies);
  const user = useSelector((store) => store.user);
  const isGptSearchEnabled = useSelector(store => store.gpt.showGptSearch)
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleGptSearch = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  }

  const handeleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  //When user signIn or SignOut this state will call and update store
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //UnSubscribe when components unmounts
    return () => unSubscribe();
  }, []);

  return (
    <div className="bg-black absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <div className="flex flex-row items-center justify-between">
        <img src={LOGO} alt="logo" className="w-24 md:w-44 mx-1 md:mx-0" />

        {user && (
          <div className="flex items-center ml-auto">
            {isGptSearchEnabled && (
              <select
                name="multi-language"
                className="m-2 md:m-6 py-1 md:py-2 px-2 md:px-3 rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-1 md:py-2 px-2 md:px-4 m-2 md:m-4 bg-teal-400 rounded-md mx-2 text-black"
              onClick={handleGptSearch}
            >
              {!isGptSearchEnabled ? "GPT Search" : "HomePage"}
            </button>
            <span className="relative py-1 md:py-2 px-2 md:px-4s m-2 md:m-4 rounded-md text-2xl cursor-pointer text-white">
            <Link to="/watchlist">
              <RiHeartAdd2Line className="text-3xl"/>
              <span className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4 rounded-full bg-red-600 text-xs w-4 h-4 text-white flex items-center justify-center">
                {watchListMovies && watchListMovies.length}
              </span>
              </Link>
            </span>
            <img
              className="w-12 h-12 md:inline-block hidden"
              src={user?.photoUrl}
              alt="profileimage"
            />
            <button
              onClick={handeleSignOut}
              className="text-white bg-red-600 rounded-md mx:2 md:mx-4 py-1 md:py-2 px-2 md:px-4"
            >
              SignOut
            </button>
          </div>
        )}
      </div>
      {/* <div className='flex lg:hidden sm:block bg-black items-center justify-center rounded-full'>
            <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}>
                <GiHamburgerMenu />
            </button>
        </div> */}
    </div>
  );

};

export default Header;
