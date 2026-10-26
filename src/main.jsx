import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Index from './pages/Index.jsx'
import Lines from './pages/Lines.jsx'
import Stations from './pages/Stations.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


const mapaRutas = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index/> },
      { path: "lineas", element: <Lines/>},
      { path: "estaciones", element: <Stations/>},
      { path: "contacto", element: <Contact/>},
      { path: "*", element: <ErrorPage/>},

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={mapaRutas} />
  </StrictMode>,
)
