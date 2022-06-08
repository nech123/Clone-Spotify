import styled from 'styled-components'
import spotifyCircle from '../../../assets/spotifyCircle.svg'

export const ButtonDesktop = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #2941ab;
  margin-top: 20px;
  width: 210px;
  height: 50px;
  transition: transform 0.6s;
  border-radius: 500px;
  background-color: #1ed760;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    transform: scale(1.12);
    color: #2941ab;
    background-color: #24d664;
    cursor: pointer;
  }
`

export const Header = styled.body`
  display: flex;
  background-color: #2941ab;
  width: 100%;
  height: 570px;
  justify-content: center;
`

export const SubHeader = styled.body`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`

export const MusicStore = styled.h1`
  color: #1ed760;
  font-size: 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  margin-top: 100px;
`
export const SubTitle = styled.h1`
  display: flex;
  margin-top: 32px;
  color: #1ed760;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
`
export const ImageCircle = styled.h1`
  width: 100%;
  height: auto;
  background-image: url(${spotifyCircle});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  margin-left: 400px;
`
