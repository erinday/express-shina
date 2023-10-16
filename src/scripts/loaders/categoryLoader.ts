import { LoaderFunctionArgs } from '@remix-run/router/utils.ts'
import { CategoryInterface, getCategoryForCategoryPage } from '../tools/api.ts'

export default async function ({ params }: LoaderFunctionArgs) {
  const category: CategoryInterface | undefined = await getCategoryForCategoryPage(params.categorySlug)
  if (!category) throw new Response('', { status: 404, statusText: 'Not Found'})
  return { category }
}
