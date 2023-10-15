import { createBrowserRouter } from 'react-router-dom'
import Root from '../views/pages/Root.tsx'
import ErrorPage from '../views/pages/Error.tsx'
import HomePage from '../views/pages/Home.tsx'
import CategoriesPage from '../views/pages/Categories.tsx'
import { categoriesLoader } from '../scripts/loaders/categoriesLoader.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }, {
        path: 'categories',
        element: <CategoriesPage/>,
        loader: categoriesLoader
      }
    ]
  }
])

export default router
