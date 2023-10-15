import { createBrowserRouter } from 'react-router-dom'
import Root from '../views/pages/RootPage.tsx'
import ErrorPage from '../views/pages/ErrorPage.tsx'
import HomePage from '../views/pages/HomePage.tsx'
import CategoriesPage from '../views/pages/CategoriesPage.tsx'
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
