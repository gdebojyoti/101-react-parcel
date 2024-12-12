import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from './pages/Home'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    ErrorBoundary: Error
  },
  {
    path: '/test',
    element: <Home />
  }
])

const rootElm = document.getElementById('root')
const root = createRoot(rootElm)

root.render(<RouterProvider router={router} />)