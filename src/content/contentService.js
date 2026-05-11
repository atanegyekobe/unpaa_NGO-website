import { siteContent } from './siteContent'

// Debug: verify siteContent is loaded
console.log('siteContent loaded:', !!siteContent, 'latestNews count:', siteContent?.home?.latestNews?.length)

const CMS_BASE_URL = import.meta.env.VITE_CMS_BASE_URL
const CMS_TOKEN = import.meta.env.VITE_CMS_TOKEN

async function cmsFetch(path) {
  if (!CMS_BASE_URL) return null

  const headers = {
    'Content-Type': 'application/json'
  }

function unwrapStrapiPayload(payload) {
  if (!payload) return null

  // Strapi commonly returns { data: ... }
  if ('data' in payload) {
    const data = payload.data

    // Single type in some versions can be { data: { attributes: {...} } }
    if (data && typeof data === 'object' && 'attributes' in data) {
      return data.attributes
    }

    return data
  }

  return payload
}

  if (CMS_TOKEN) {
    headers.Authorization = `Bearer ${CMS_TOKEN}`
  }

  try {
    const response = await fetch(`${CMS_BASE_URL}${path}`, { headers })
    if (!response.ok) return null
    return response.json()
  } catch {
    return null
  }
}

function toDisplayDate(dateValue) {
  if (!dateValue) return ''
  const date = new Date(dateValue)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function getItemKey(item, index) {
  return item?.id ?? item?.link ?? item?.title ?? index
}

function mergeContentList(fallbackList = [], cmsList = []) {
  const safeCmsList = Array.isArray(cmsList) ? cmsList : []
  const safeFallbackList = Array.isArray(fallbackList) ? fallbackList : []
  const cmsByKey = new Map(safeCmsList.map((item, index) => [getItemKey(item, index), item]))
  const merged = safeFallbackList.map((fallbackItem, index) => {
    const key = getItemKey(fallbackItem, index)
    return cmsByKey.get(key) ? { ...fallbackItem, ...cmsByKey.get(key) } : fallbackItem
  })

  const fallbackKeys = new Set(safeFallbackList.map((item, index) => getItemKey(item, index)))
  safeCmsList.forEach((item, index) => {
    const key = getItemKey(item, index)
    if (!fallbackKeys.has(key)) {
      merged.push(item)
    }
  })

  return merged
}

export async function getHomeContent() {
  try {
    const cmsRaw = await cmsFetch('/home')
    const cmsData = unwrapStrapiPayload(cmsRaw)
    
    // If we have valid CMS data, merge it with fallback
    if (cmsData && typeof cmsData === 'object') {
      const result = {
        latestNews: mergeContentList(siteContent.home.latestNews, cmsData?.latestNews || []).map(n => ({
          ...n,
          displayDate: toDisplayDate(n.date ?? n.displayDate)
        })),
        impactCards: mergeContentList(siteContent.home.impactCards, cmsData?.impactCards || [])
      }
      console.log('Merged CMS data:', result)
      return result
    }
  } catch (error) {
    console.error('Error fetching home content:', error)
  }
  
  // Always fall back to default content if CMS fails or returns nothing
  const fallbackResult = {
    latestNews: siteContent.home.latestNews.map(n => ({ ...n, displayDate: toDisplayDate(n.date) })),
    impactCards: siteContent.home.impactCards
  }
  console.log('Returning fallback content:', fallbackResult)
  return fallbackResult
}

export async function getBlogContent() {
  const cmsRaw = await cmsFetch('/blog')
  const cmsData = unwrapStrapiPayload(cmsRaw)
  if (!cmsData || typeof cmsData !== 'object') {
    return {
      categories: siteContent.blog.categories,
      posts: siteContent.blog.posts.map(p => ({ ...p, displayDate: toDisplayDate(p.date) }))
    }
  }

  return {
    categories: cmsData.categories ?? ['All'],
    posts: (cmsData.posts ?? []).map(p => ({ ...p, displayDate: toDisplayDate(p.date) }))
  }
}

export async function getGalleryContent(category = 'all') {
  const cmsRaw = await cmsFetch('/gallery')
  const cmsData = unwrapStrapiPayload(cmsRaw)

  const source = cmsData?.categories ?? siteContent.gallery.categories
  const all = [...(source.community ?? []), ...(source.education ?? []), ...(source.healthcare ?? [])]

  if (category === 'all' || !source[category]) {
    return { categories: source, images: all }
  }

  return { categories: source, images: source[category] }
}
