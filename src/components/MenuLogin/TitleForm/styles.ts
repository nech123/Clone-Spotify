import styled from 'styled-components'
import LogoBlack from '../../../assets/FormImg/LogoBlack.png'

export const ImageTitle = styled.image`
  background-image: url(${LogoBlack});
  width: 280px;
  height: 100px;
  background-size: 186px;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  text-indent: -9999px;
  align-items: center;
  justify-content: center;
`

export const StatusBar = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid #6a6a6a;
  border-width: 1px;
  border-color: #d9dadc;
`
