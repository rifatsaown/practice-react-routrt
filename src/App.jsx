import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import './App.css'
import Friends from './Friends/Friends';
import About from './About/About';
import Main from './Main/Main';

const router = createBrowserRouter([
  { path: '/',element: <Main/> 
  ,children: [
    { path: '/',element: <Home/>},
    { path: '/home',element: <Home/>},
    { path: '/about',element: <About/>},
    { path: '/friend',element: <Friends/>},
  ]},
])

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;