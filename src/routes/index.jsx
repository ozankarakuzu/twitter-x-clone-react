import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import Profil from "~/pages/profil";

const routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'explore',
                element: <Explore/>
            },
            {
                path:'notifications',
                element: <Notifications/>
            },
            {
                path: ':slug',
                element: <Profil/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }    
])

export default routes