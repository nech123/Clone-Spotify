import styled from 'styled-components'

import {
  AiOutlineFacebook,
  AiOutlineApple,
  AiOutlineGoogle,
  AiOutlinePhone
} from 'react-icons/ai'

export const Container = styled.h1`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
`

export const Warning = styled.span`
  width: auto;
  height: 20px;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  margin-top: 45px;
`

export const DivSocial = styled.div`
  color: ${(props) => props.color || 'black'};
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  width: 450px;
  height: 50px;
  border: 0.7px solid gray;
  border-radius: 250px;
  letter-spacing: 1.7px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg || 'black'};
  gap: 6px;

  &:nth-child(2) {
    border: none;
  }

  &:nth-child(3) {
    border: none;
  }

  &:hover {
    border: 2.5px solid black;
    cursor: pointer;
  }
`

export const TextMain = styled.h1`
  display: flex;
  font-size: 15px;
  font-weight: 560;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const FacebookLogin = styled(AiOutlineFacebook)`
  width: 24px;
  height: 24px;
`

export const AppleLogin = styled(AiOutlineApple)`
  margin-left: -14px;

  width: 24px;
  height: 24px;
`

export const GoogleLogin = styled(AiOutlineGoogle)`
  width: 24px;
  height: 24px;
`

export const FoneLogin = styled(AiOutlinePhone)`
  width: 30px;
  height: 30px;
`

export const DivVoid = styled.h1`
  border-bottom: 1px solid;
  margin-bottom: 20px;
  width: 300px;
  border-width: 1px;
  border-color: #d9dadc;
`
export const TextDiv = styled.h1`
  font-size: 15px;
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const DivOU = styled.h1`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 50px;
`

export const DivInputs = styled.div`
  width: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const DivInput = styled.div`
  width: 450px;
  height: 70px;
`
export const SpanInput = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const InputLogin = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 7px;
  border: 1px solid #a6a6a6;
  box-sizing: border-box;

  &::placeholder {
    color: gray;
    font-size: 15px;
    padding: 7px;
  }
`

export const DivIng = styled.div`
  width: 100%;
`

export const PasswordIng = styled.text`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 12px;
`

export const DivRemanber = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
export const DivLabel = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const LabelInter = styled.text`
  display: flex;
  margin-left: 12px;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const ButtonEnter = styled.text`
  background-color: #1ed760;
  width: 100px;
  height: 40px;
  font-size: 13px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    cursor: pointer;
  }
`

export const DivAux = styled.div`
  display: flex;
`
export const DivBorder = styled.h1`
  width: 450px;
  margin-top: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
`

export const DivBorders = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d9dadc;
  width: 100%;
`
export const DivNoAcc = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const TextAcc = styled.h1`
  font-size: 20px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
`
export const DivSub = styled.div`
  color: #a6a6a6;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
  width: 440px;
  height: 50px;
  border: 0.7px solid black;
  border-radius: 250px;
  letter-spacing: 1.7px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`
export const DivSubscible = styled.h1`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  color: gray;
`
