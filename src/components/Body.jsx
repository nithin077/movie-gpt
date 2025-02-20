import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import WatchList from './WatchList'
import Header from './Header'


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
                    path: "/watchlist",
                    element: <WatchList />
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