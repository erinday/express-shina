import { LoaderFunctionArgs } from 'react-router-dom'
import { getDataForSecondCategoryPage } from '../tools/api.ts'

export default async function secondCategoryLoader ({ params }: LoaderFunctionArgs) {
  const data = await getDataForSecondCategoryPage(params.categorySlug, params.secondCategorySlug)
  if (!data) throw new Response('', { status: 404, statusText: 'Not Found'})
  return { category: data.category, secondCategory: data.secondCategory }
}
