import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Applayout from './component/Applayout'
import Home from './component/Home'
import About from './component/About'

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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={appRouter} />
}

export default App