import { createBrowserRouter } from 'react-router-dom'
import Root from '../views/pages/RootPage.tsx'
import ErrorPage from '../views/pages/ErrorPage.tsx'
import HomePage from '../views/pages/HomePage.tsx'
import CategoriesPage from '../views/pages/CategoriesPage.tsx'
import CategoryPage from '../views/pages/CategoryPage.tsx'
import categoriesLoader from '../scripts/loaders/categoriesLoader.ts'
import categoryLoader from '../scripts/loaders/categoryLoader.ts'

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
      }, {
        path: 'categories/:categorySlug',
        element: <CategoryPage/>,
        loader: categoryLoader
      }
    ]
  }
])

export default router
