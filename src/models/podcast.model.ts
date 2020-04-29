export type TAcfData = {
  lienAusha: string
  musiqueAdditionnelle?: string
  noteFinale: string
}

export type TPodcastData = {
  acf?: TAcfData
  slug?: string
  artiste: number[]
  content: string
  id: string
  title: string
}
