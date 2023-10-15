import { getCategoryAndSubcategoriesForCategoryPage } from '../tools/api.ts'

export default async function ({ params }: LoaderCategoryArgs) {
  const category = await getCategoryAndSubcategoriesForCategoryPage(params.categorySlug)
  if (!category) throw new Response('', { status: 404, statusText: 'Not Found'})
  return { category }
}

interface LoaderCategoryArgs {
  params: {
    categorySlug: string
  }
}
