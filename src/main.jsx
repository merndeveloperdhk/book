import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesRead from './Components/PagesRead/PagesRead';
import SingleBook from './Components/Books/SingleBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pagesRead',
        element:<PagesRead></PagesRead>
      },
      {
        path:'/singleBook/:id',
        element:<SingleBook></SingleBook>,
        loader:() => fetch(`../bookData.json/`)
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:() => fetch('jobs.json') //Do not load all data. load only what you need
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
