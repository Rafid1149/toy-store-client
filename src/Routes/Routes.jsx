import {
    createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Toys from "../Pages/Toys/Toys";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blogs></Blogs>
        },
        {
            path: '/toys',
            element: <Toys></Toys>
        },
        {
            path: '/addToys',
            element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
            path: '/myToys',
            element:<PrivateRoute> <MyToys></MyToys></PrivateRoute>,
        
        }
      ]
    },
  ]);

  export default router;