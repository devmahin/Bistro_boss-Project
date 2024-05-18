import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Ourmenu from "../Pages/Ourmenu/Ourmenu";
import Ourshope from "../Pages/OurShope/Ourshope";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmenu",
        element: <Ourmenu></Ourmenu>,
      },
      {
        path: "/ourshope",
        element: <Ourshope></Ourshope>,
      },
      {
        path: "/ourshope/:category",
        element: <Ourshope></Ourshope>,
      },{
        path : "/login",
        element : <Login></Login>
      }
    ],
  },
]);
