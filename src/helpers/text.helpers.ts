export const convertInRegulatText = (encoded: string): string => {
  return (
    encoded &&
    encoded
      .replace(`&rsquo;`, `'`)
      .replace(`&lsquo;`, `'`)
      .replace(`&laquo;`, `«`)
      .replace(`&raquo;`, `»`)
      .replace(`<p>`, "")
      .replace(`</p>`, "")
  )
}
