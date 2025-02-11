import { useRef, useState } from "react";
import Header from "./Header";
import { ValidationForm } from "../sharedcomponents/ValidationForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../sharedcomponents/Firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../sharedcomponents/UserSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignUporIn = () => {
    //validate data
    const message = ValidationForm(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (message) return null;

    //Sign Up Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Sign up
          //Updating User Info
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name?.current?.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/85398255?s=400&u=c35a86b5c67f36b14087818f4cafd7296ff7ba3f&v=4",
          })
            .then(() => {
                const {uid, email,displayName,photoURL} = auth;
                dispatch(addUser({uid : uid, email : email, displayName : displayName, photoUrl : photoURL}));
              navigate("/browse");
             
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
          alt="backgroundImage"
        />
      </div>
      <div className=" ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col absolute bg-black bg-opacity-80 py-20 px-14 mt-36 mx-auto w-3/12 right-0 left-0 text-white "
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-2 my-4 w-full  rounded-md bg-inherit border border-white bg-gray-700 bg-opacity-70"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-2 my-4 w-full rounded-md bg-inherit border border-white bg-gray-700 bg-opacity-70"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 my-4 w-full  rounded-md bg-inherit border border-white bg-gray-700 bg-opacity-70"
          />
          <p className="text-red-600 font-bold">{errorMessage}</p>
          <button
            className="p-2 my-4 w-full bg-red-600 text-white  rounded-md"
            onClick={handleSignUporIn}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}
            <span
              typeof="button"
              className="cursor-pointer font-bold hover:underline"
              onClick={handleToggleSignInForm}
            >
              {isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
