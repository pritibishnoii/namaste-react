
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from './components/About'
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = () => {
  return (
    <div>
        <Header />
        {
            /**
             * if path =/ 
             * <Body/>
             * if path=/about
             *  <About />
             * if path=/contact 
             * <Contact />
             * if path=/cart
             * <Cart />
             */
        }
        
        {/* <Body /> */}
        <Outlet/>  
        {/* // children will be displayed here */}
    </div>
  )
}
``

const approuter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    },
    {
        path:"/cart",   
        element:<Cart />
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />
    }
        ],
        errorElement:<Error/>,
    },
    
])


const  root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
