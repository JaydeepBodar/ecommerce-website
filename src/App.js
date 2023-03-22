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
function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Layoute />,
    children:[{
      index:true,element:<Home />
    },
    {path:'blog',element:<Blog />},
    {path:'contact',element:<Contact />},
    {path:'store',element:<Ourstore/>}
  ]

  },])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
