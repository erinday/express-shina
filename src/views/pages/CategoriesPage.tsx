import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoryInterface } from '../../scripts/tools/api.ts'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'
import Categories from '../components/categories/categories.tsx'

export default function CategoriesPage (): JSX.Element {
  const { categories } = useLoaderData() as LoadDataCategoriesPage
  setHeadMeta('Категории')
  return (
    <>
      <Categories caption="Все категории" categories={categories}/>
    </>
  )
}

interface LoadDataCategoriesPage {
  categories: [
    CategoryInterface
  ]
}
