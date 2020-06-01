export type AcfData = {
  lienAusha: string
  idAusha: string
  musiqueAdditionnelle?: string
  noteFinale: string
}

export type Tag = {
  id: string
  name: string
  slug: string
  count?: number
}

export type FeaturedMedia = {
  id?: string
  source_url: string
  alt_text: string
}

export type PodcastData = {
  acf?: AcfData
  slug?: string
  artiste: number[]
  content: string
  id: string
  title: string
  tags?: Tag[]
  featured_media?: FeaturedMedia
}
