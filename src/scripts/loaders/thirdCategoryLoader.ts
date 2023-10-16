import { LoaderFunctionArgs } from '@remix-run/router/utils.ts'
import { getDataThirdCategoryPage } from '../tools/api.ts'

export default async function thirdCategoryLoader ({ params }: LoaderFunctionArgs) {
  const data = await getDataThirdCategoryPage(params.categorySlug, params.secondCategorySlug, params.thirdCategorySlug)
  if (!data) throw new Response('', { status: 404, statusText: 'Not Found'})
  return {
    category: data.category,
    secondCategory: data.secondCategory,
    thirdCategory: data.thirdCategory
  }
}
