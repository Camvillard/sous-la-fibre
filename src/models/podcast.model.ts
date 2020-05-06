export type TAcfData = {
  lienAusha: string
  musiqueAdditionnelle?: string
  noteFinale: string
}

export type TTag = {
  id: string
  name: string
  slug: string
  count?: number
}

export type TFeaturedMedia = {
  id?: string
  source_url: string
  alt_text: string
}

export type TPodcastData = {
  acf?: TAcfData
  slug?: string
  artiste: number[]
  content: string
  id: string
  title: string
  tags?: TTag[]
  featured_media?: TFeaturedMedia
}
