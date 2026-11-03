import type { MaybeRefOrGetter } from 'vue'
import { site, siteUrl } from '~~/shared/utils/site'

interface SiteSeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string | undefined>
  imageAlt?: MaybeRefOrGetter<string>
}

export const useSiteSeo = (options: SiteSeoOptions) => {
  const route = useRoute()
  // Query parameters only filter the portfolio; they are not separate pages.
  const canonical = computed(() => siteUrl(route.path.replace(/\/+$/, '') || '/'))
  const image = computed(() => siteUrl(toValue(options.image) || site.image))
  const imageAlt = computed(() => toValue(options.imageAlt) || site.imageAlt)

  useSeoMeta({
    title: () => toValue(options.title),
    description: () => toValue(options.description),
    author: site.name,
    robots: 'index, follow, max-image-preview:large',
    ogType: 'website',
    ogSiteName: site.name,
    ogLocale: 'en_US',
    ogUrl: () => canonical.value,
    ogTitle: () => toValue(options.title),
    ogDescription: () => toValue(options.description),
    ogImage: () => image.value,
    ogImageWidth: () => toValue(options.image) ? undefined : 1200,
    ogImageHeight: () => toValue(options.image) ? undefined : 630,
    ogImageAlt: () => imageAlt.value,
    twitterCard: 'summary_large_image',
    twitterTitle: () => toValue(options.title),
    twitterDescription: () => toValue(options.description),
    twitterImage: () => image.value,
    twitterImageAlt: () => imageAlt.value,
  })

  useHead(() => ({
    link: [{ rel: 'canonical', href: canonical.value }],
  }))

  return { canonical, image }
}
