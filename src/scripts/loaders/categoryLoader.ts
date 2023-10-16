import { CategoryInterface, getCategoryForCategoryPage } from '../tools/api.ts'
import { LoaderFunctionArgs } from 'react-router-dom'

export default async function ({ params }: LoaderFunctionArgs) {
  const category: CategoryInterface | undefined = await getCategoryForCategoryPage(params.categorySlug)
  if (!category) throw new Response('', { status: 404, statusText: 'Not Found'})
  return { category }
}
