export default function setHeadMeta (caption = 'Express-Шина', content = true) {
  document.title = caption
  const robots: HTMLMetaElement | null = document.querySelector('meta[name="robots"]')
  if (robots) robots.content = content ? 'index' : 'noindex'
}
