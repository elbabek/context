import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/pages/About';
import Contacts from './component/pages/Contacts';
import MainPage from './component/pages/MainPage';
import Goods from './component/pages/Goods';
import Authorization from './component/pages/Authorization';
import { AuthProvider } from './context/AuthContext';
import Address from './component/pages/Address';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contacts',
        element: <Contacts />
      },
      {
        path: '/goods',
        element: <Goods />
      },
      {
        path:'/authorization',
        element: <Authorization/>
      },
      {
        path: '/adress',
        element:<Address/>
      }
    ]
  },
  {
    path: "/pricing",
    element: <div> page pricing</div>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
);
