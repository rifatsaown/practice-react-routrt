import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import './App.css'
import Friend from './Friend/Friend';
import About from './About/About';

const router = createBrowserRouter([
  { path: '/',element: <Home /> },
  { path: '/home',element: <Home /> },
  { path: '/about',element: <About/>},
  { path: '/friend',element: <Friend /> },
])

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;