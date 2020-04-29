export const createExcerpt = (content: string): string => {
  return content
    .trim()
    .split("</p>")[0]
    .replace("<p>", "")
}
