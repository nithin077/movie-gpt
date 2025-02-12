import React,{ useEffect } from "react";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../sharedcomponents/Firebase";
import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { addUser, removeUser } from '../sharedcomponents/UserSlice'
import { LOGO } from "../sharedcomponents/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handeleSignOut = () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

      //When user signIn or SignOut this state will call and update store
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email,displayName,photoURL} = user;
              dispatch(addUser({uid : uid, email : email, displayName : displayName, photoUrl : photoURL}));
              navigate('/browse');
              
            } else {
              dispatch(removeUser());
              navigate('/');
            }
          });

          //UnSubscribe when components unmounts
          return () => unSubscribe();
    },[])

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />

      {user && (
        <div className="flex m-2 p-2">
          <img className="w-10 h-10" src={user?.photoUrl} alt="profileimage" />
          <button
            onClick={handeleSignOut}
            className="text-white bg-red-600 rounded-md mx-2 w-20"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
