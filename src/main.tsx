import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Profiles from './Profiles'
import NotFoundPage from './NotFoundPage'
import Profile from './Profile'


import JoinRoom from './student-view/JoinRoom'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path : '/',
    element: <JoinRoom/>
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
