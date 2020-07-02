import React from "react"

type Props = {
  color?: string
}

export const Ausha = ({ color }: Props) => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 84 84"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 46.1131 0.591246 50.0881 1.69338 53.8447L8.89314 43.5593C10.7934 40.8446 14.5346 40.1844 17.2493 42.0847C19.964 43.985 20.6242 47.7262 18.7239 50.4409L7.68059 66.2171C9.01379 68.103 10.4985 69.8742 12.1171 71.5129L40.0845 31.5593C41.9848 28.8446 45.726 28.1843 48.4407 30.0846C51.1554 31.9849 51.8156 35.7261 49.9153 38.4408L21.6855 78.7692C23.6115 79.8355 25.6301 80.7549 27.7261 81.5122L45.8931 55.5593C47.7934 52.8446 51.5346 52.1844 54.2493 54.0847C56.964 55.985 57.6242 59.7262 55.7239 62.4409L40.6475 83.9786C41.0966 83.9928 41.5475 84 42 84Z"
        fill={color || "white"}
      />
    </svg>
  )
}
