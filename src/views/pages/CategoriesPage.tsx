import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import Categories from '../components/categories/categories.tsx'
import { CategoryInterface } from '../../scripts/tools/api.ts'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'

export default function CategoriesPage (): JSX.Element {
  const { categories } = useLoaderData() as LoadDataCategoriesPage
  setHeadMeta('Категории')
  return (
    <>
      <Categories caption="Все категории" categories={ categories }/>
    </>
  )
}

interface LoadDataCategoriesPage {
  categories: [
    CategoryInterface
  ]
}
