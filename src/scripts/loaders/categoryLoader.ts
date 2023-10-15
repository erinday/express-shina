import { LoaderFunctionArgs } from '@remix-run/router/utils.ts'
import { getCategoryAndSubcategoriesForCategoryPage } from '../tools/api.ts'

export default async function ({ params }: LoaderFunctionArgs) {
  const category = await getCategoryAndSubcategoriesForCategoryPage(params.categorySlug)
  if (!category) throw new Response('', { status: 404, statusText: 'Not Found'})
  return { category }
}
