import { createBrowserRouter } from 'react-router-dom'
import Root from '../views/pages/RootPage.tsx'
import ErrorPage from '../views/pages/ErrorPage.tsx'
import HomePage from '../views/pages/HomePage.tsx'
import CategoriesPage from '../views/pages/CategoriesPage.tsx'
import categoriesLoader from '../scripts/loaders/categoriesLoader.ts'
import CategoryPage from '../views/pages/CategoryPage.tsx'
import categoryLoader from '../scripts/loaders/categoryLoader.ts'
import SecondCategoryPage from '../views/pages/SecondCategoryPage.tsx'
import secondCategoryLoader from '../scripts/loaders/secondCategoryLoader.ts'
import ThirdCategoryPage from '../views/pages/ThirdCategoryPage.tsx'
import thirdCategoryLoader from '../scripts/loaders/thirdCategoryLoader.ts'

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
      }, {
        path: 'categories/:categorySlug/:secondCategorySlug',
        element: <SecondCategoryPage/>,
        loader: secondCategoryLoader
      }, {
        path: 'categories/:categorySlug/:secondCategorySlug/:thirdCategorySlug',
        element: <ThirdCategoryPage/>,
        loader: thirdCategoryLoader
      }
    ]
  }
])

export default router
