import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Profiles from './Profiles'
import NotFoundPage from './NotFoundPage'
import Profile from './Profile'


import { Search } from './search/Search'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SavedToons from './savedtoons/SavedToons'
import About from './about/About'


const router = createBrowserRouter([
  {
    path : '/',
    element: <Search/>
  },
  {
    path : '/search',
    element: <Search/>,
    children: [
      {
        path: '/search/:toonId',
        element : <Profile />
      }
    ]
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
