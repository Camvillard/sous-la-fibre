export const convertInRegulatText = (encoded: string): string => {
  return encoded
    .replace(`&rsquo;`, `'`)
    .replace(`&lsquo;`, `'`)
    .replace(`&laquo;`, `«`)
    .replace(`&raquo;`, `»`)
}
