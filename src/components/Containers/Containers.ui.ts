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

export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FlexboxContainer = styled.div`
  display: flex;
`
export const GridContainer = styled.div`
  display: grid;
`
