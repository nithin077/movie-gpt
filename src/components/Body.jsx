import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import WatchList from './WatchList'
import Header from './Header'
import GptSearch from './GptSearch'
import MovieDetails from './MovieDetails'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <div><Header /><Outlet/></div>,
            children: [
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "/browse",
                    element: <Browse />
                },
                {
                    path : 'gptserach',
                    element : <GptSearch />
                },
                {
                    path: "watchlist",
                    element: <WatchList />
                },
                {
                    path: "movie/:id",
                    element: <MovieDetails />
                },
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body