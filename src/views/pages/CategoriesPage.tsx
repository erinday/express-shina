import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import Categories from '../components/categories/categories.tsx'
import { BaseCategory } from '../../scripts/tools/api.ts'

export default function CategoriesPage (): JSX.Element {
  const { categories } = useLoaderData() as LoadDataCategoriesPage

  return (
    <>
      <Categories caption="Все категории" categories={categories}/>
    </>
  )
}

interface LoadDataCategoriesPage {
  categories: [
    BaseCategory
  ]
}
