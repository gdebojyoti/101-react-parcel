import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    ErrorBoundary: Error
  },
  {
    path: '/restaurant/:id/:name',
    element: <Restaurant />
  }
])

const rootElm = document.getElementById('root')
const root = createRoot(rootElm)

root.render(<RouterProvider router={router} />)