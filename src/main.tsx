import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Profiles from './Profiles'
import NotFoundPage from './NotFoundPage'
import Profile from './Profile'


import { SearchPage } from './search/SearchPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SavedToons from './savedtoons/SavedToons'
import About from './about/About'
import ToonProfilePage from './search/ToonProfilePage'


const router = createBrowserRouter([
  {
    path : '/',
    element: <SearchPage/>
  },
  {
    path : '/search',
    element: <SearchPage/>,
  },
  {
    path : '/search/:toonid',
    element: <ToonProfilePage/>,
  },
  {
    path : '/savedtoons',
    element: <SavedToons/>
  },
  {
    path : '/about',
    element: <About/>
  }
  // {
  //   path : '/',
  //   element: <App />,
  //   errorElement: <NotFoundPage/>
  // },
  // {
  //   path : '/profiles',
  //   element: <Profiles />,
  //   children: [
  //     {
  //       path: '/profiles/:profileId',
  //       element : <Profile />
  //     }
  //   ]
  // }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
