import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Home';

const Instagram = () => {

    const AppRouter = createBrowserRouter(
        [
          {
            path: "/",
            element: <Login />,
          },
          {
            path:"/home",
            element: <Home/>
          }
         
        ]);
        
    
  return (


    <div>
     <RouterProvider router={AppRouter} />
    </div>
  )
}

export default Instagram