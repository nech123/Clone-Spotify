import styled from 'styled-components'

export const ButtonGo = styled.h1`
  background-color: #1ed760;
  width: 100px;
  height: 40px;
  font-size: 13px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    cursor: pointer;
  }
`
export const DivLabel = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const DivAux = styled.div`
  display: flex;
`
export const LabelInter = styled.text`
  display: flex;
  margin-left: 12px;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
