import { createBrowserRouter } from 'react-router-dom'
import Root from '../views/pages/root.tsx'
import Home from '../views/pages/home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: 'categories',
        element: <Home /> },
    ]
  },
])

export default router
