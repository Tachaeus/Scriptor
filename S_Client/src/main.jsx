import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx'
import Tasks from './pages/tasks.jsx'
import Dashborad from './pages/dashboard.jsx'
import Unknown from './pages/unknown.jsx'
import Login from './pages/login.jsx'
import Contact from './pages/contact.jsx'
import Register from './pages/register.jsx'
import More from './pages/more.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'tasks',
    element: <Tasks />,
  },
  {
    path: 'dashboard',
    element: <Dashborad />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: '/*',
    element: <Unknown />,
  },
  {
    path: '/register',
    element:  <Register />
  },
  {
    path: 'more',
    element: <More />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
