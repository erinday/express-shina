import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoriesForCategoryPage } from '../../scripts/tools/api.ts'
import Categories from '../components/categories/categories.tsx'

export default function CategoriesPage (): JSX.Element {
  const { categories } = useLoaderData() as LoadDataCategoriesPage

  return (
    <>
      <Categories categories={categories}/>
    </>
  )
}

interface LoadDataCategoriesPage {
  categories: CategoriesForCategoryPage[]
}
