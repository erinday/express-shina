import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoriesForCategoryPage } from '../../scripts/tools/api.ts'
import Category from '../components/categories/category.tsx'

export default function CategoryPage (): JSX.Element {
  const { category } = useLoaderData() as LoadDataCategoryPage
  return (
    <>
      <Category caption={category.name} parentUrl={`/categories/${category.slug}`} categories={category.children}/>
    </>
  )
}

interface LoadDataCategoryPage {
  category: CategoriesForCategoryPage
}
