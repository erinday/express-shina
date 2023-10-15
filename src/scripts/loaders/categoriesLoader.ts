import {
  CategoriesForCategoryPage,
  getCategoriesForCategoryPage,
} from '../tools/api.ts'

export async function categoriesLoader () {
  const categories: CategoriesForCategoryPage[] = await getCategoriesForCategoryPage()
  if (!categories.length) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    })
  }
  return { categories }
}
