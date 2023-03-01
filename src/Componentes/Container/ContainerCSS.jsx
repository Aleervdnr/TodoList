import styled from "styled-components"

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 10px 20px;
`

export const SemiCircle = styled.div`
  position: absolute;
  top: -70px;
  width: 120%;
  height: 150px;
  border-radius: 50%;
  background-color: var(--verde);
`