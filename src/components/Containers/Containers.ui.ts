import styled from "styled-components"

type ContainerProps = {
  top?: string
  bottom?: string
}
export const MainContainer = styled.div`
  width: 92vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props: ContainerProps) => props.top || "24px"};
  margin-bottom: ${(props: ContainerProps) => props.bottom || "24px"};
`
