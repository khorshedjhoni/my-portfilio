import { createBrowserRouter } from "react-router-dom";
import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Course1 from "../component/Details/Course1";
import Course2 from "../component/Details/Course2";
import Course3 from "../component/Details/Course3";
import Header from "../component/Header";
import Home from "../component/Home";
import Introduce from "../component/Introduce";
import Main from "../component/Main";

export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/header',
                element:<Header></Header>
            },
            {
                path:'/introduce',
                element:<Introduce></Introduce>
            },{
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/course1',
                element:<Course1></Course1>
            },
            {
                path:'/course2',
                element:<Course2></Course2>
            },
            {
                path:'/course3',
                element:<Course3></Course3>
            },
            {
                path:'about',
                element:<About></About>
            }
        ]
    }
])