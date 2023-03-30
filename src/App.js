import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layoute from './component/Layoute';
import Ourstore from './pages/Ourstore';
import Compareproduct from './pages/Compareproduct';
import Whichlist from './pages/Whichlist';
import Login from './pages/Login';
import Forgetpassword from './pages/Forgetpassword';
import Signup from './pages/Signup';
import Resetpassword from './component/Resetpassword';
import Singleblog from './pages/Singleblog';
import SingleProduct from './pages/SingleProduct';
function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Layoute />,
    children:[{
      index:true,element:<Home />
    },
    {path:'blog',element:<Blog />},
    {path:'blog/:id',element:<Singleblog/>},
    {path:'homeblog/:id',element:<Singleblog />},
    {path:'about',element:<About />},
    {path:'contact',element:<Contact />},
    {path:'store',element:<Ourstore/>},
    {path:'store/:id',element:<SingleProduct/>},
    {path:'product/:id',element:<SingleProduct/>},
    {path:'compare',element:<Compareproduct/>},
    {path:'whishlist',element:<Whichlist/>},
    {path:'login',element:<Login/>},
    {path:'forgetpassword',element:<Forgetpassword/>},
    {path:'signup',element:<Signup/>},
    {path:'Resetpassword',element:<Resetpassword/>}
  ]

  },])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
