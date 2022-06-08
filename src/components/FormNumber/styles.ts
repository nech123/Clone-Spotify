import styled from 'styled-components'

export const ContainerNumber = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const Warning = styled.h1`
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const ContainerInputs = styled.div`
  margin-top: 10px;
  width: 400px;
  height: auto;
  align-items: center;
  justify-content: center;
`
export const InputDDD = styled.input`
  width: 50px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;

  &::placeholder {
    color: #000;
    padding: 10px;
  }
`
export const InputNumber = styled.input`
  width: 300px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;

  &::placeholder {
    color: #000;
    padding: 10px;
  }
`
