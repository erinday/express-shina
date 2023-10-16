import { JSX } from 'react'
import {
  CategoryInterface, SecondCategoryInterface,
  ThirdCategoryInterface,
} from '../../scripts/tools/api.ts'
import CategoriesBack from '../components/categories/categories-back.tsx'
import { useLoaderData } from 'react-router-dom'
import Tile from '../components/_tile/tile.tsx'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'

export default function ThirdCategoryPage (): JSX.Element {
  const { category, secondCategory, thirdCategory } = useLoaderData() as LoadDataThirdCategoryPage
  setHeadMeta(thirdCategory.name, thirdCategory.index)
  return (
    <>
      <CategoriesBack url={`/categories/${category.slug}/${secondCategory.slug}`} linkText={secondCategory.name}/>
      <Tile caption={thirdCategory.name} />
    </>
  )
}

interface LoadDataThirdCategoryPage {
  category: CategoryInterface
  secondCategory: SecondCategoryInterface
  thirdCategory: ThirdCategoryInterface
}
