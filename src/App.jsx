import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Applayout from './component/Applayout'
import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Contact from './component/Contact'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/service',
        element:<Service/>
      },
      {
        path: '/contact',
        element:<Contact/>
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
  
}

export default App