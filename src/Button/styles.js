import styled from 'styled-components'

export const ButtonSecundary = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-top: 30px;
  width: 210px;
  height: 45px;
  border-radius: 500px;
  transition: transform 0.5s;
  background-color: #d83519;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    transform: scale(1.12);
    color: #fff;
    background-color: #c0392b;
    cursor: pointer;
  }
`
