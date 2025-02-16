import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../sharedcomponents/Firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../sharedcomponents/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../sharedcomponents/Constant";
import { toggleGptSearchView } from "../sharedcomponents/GptSlice";
import { changeLanguage } from "../sharedcomponents/ConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isGptSearchEnabled = useSelector(store => store.gpt.showGptSearch)

  const handleGptSearch = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  }

  const handeleSignOut = () => {
    signOut(auth)
      .then(() => {})
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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44" />

      {user && (
        <div className="flex p-2 items-center">
          {isGptSearchEnabled && <select name="multi-language" className="m-6 py-2 px-3 rounded-md" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>}
          <button
            className="py-2 px-4 m-4 bg-teal-400 rounded-md mx-2 text-black"
            onClick={handleGptSearch}
          >
           {!isGptSearchEnabled ? " GPT Search" : "HomePage"}
          </button>
            <img
              className="w-12 h-12"
              src={user?.photoUrl}
              alt="profileimage"
            />
            <button
              onClick={handeleSignOut}
              className="text-white bg-red-600 rounded-md mx-4 py-2 px-4"
            >
              Sign Out
            </button>

        </div>
      )}
    </div>
  );
};

export default Header;
