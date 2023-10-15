const domain = ''

export default {
  async get (url: string) {
    const res = await fetch(`${domain}${url}`, {
      method: 'GET'
    })
    if (res.ok) return await res.json()
    return null
  }
}
