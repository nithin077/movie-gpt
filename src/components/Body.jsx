import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../sharedcomponents/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../sharedcomponents/UserSlice'

const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
            path : "/browse",
            element : <Browse />
        }
    ]);

    //When user signIn or SignOut this state will call and update store
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email,displayName,photoURL} = user;
              dispatch(addUser({uid : uid, email : email, displayName : displayName, photoUrl : photoURL}));
              
            } else {
              dispatch(removeUser());
            }
          });
    }, [])
        

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body