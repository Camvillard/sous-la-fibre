export const createExcerpt = (content: string): string => {
  if (!content) {
    return undefined
  }
  return content
    .trim()
    .split("</p>")[0]
    .replace("<p>", "")
}
