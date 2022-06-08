import styled from 'styled-components'
import spotifyLogo from '../../../assets/spotifyLogo.png'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

export const FooterEnd = styled.h1`
  display: block;
  width: 100%;
  height: 530px;
  background-color: #000;
  padding: 90px 90px 80px 50px;
`

export const FirstTable = styled.div`
  width: 1170px;
  height: 400px;
  display: flex;
  margin-left: 338px;
  margin-right: 338px;
  flex-direction: column;
  justify-content: space-around;
`

export const UlMedium = styled.div`
  display: flex;
  flex-direction: column;
  width: 196px;
  height: 345px;
  justify-content: start;
  padding-top: 20px;
  align-items: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const LinksTop = styled.div`
  width: 100%;
  height: 346px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const UlEnd = styled.h1`
  width: 195px;
  height: 345px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 20px;
  align-items: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const LiTips = styled.h1`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 10px;

  &:hover {
    color: #1ed760;
    cursor: pointer;
  }

  &:nth-child(1) {
    margin-bottom: 10px;
    color: gray;
  }
`

export const UlStart = styled.h1`
  width: 195px;
  height: 346px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-top: 20px;
`

export const Terms = styled.h1`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  color: #fff;
  justify-content: space-between;
`

export const Ul = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`

export const Litipers = styled.h1`
  height: 45px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    color: #1ed760;
    cursor: pointer;
  }
`

export const Pais = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const PaisSelect = styled.h1`
  font-size: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    color: #1ed760;
    cursor: pointer;
  }
`

export const UlEndTwo = styled.div`
  width: 200px;
  height: 200px;
`

export const ImgFriq = styled.a`
  display: flex;
  flex-direction: column;
  width: 196px;
  height: 345px;
  background-image: url(${spotifyLogo});
  background-size: 160px;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`
export const IconsSocial = styled.h1`
  width: 192px;
  height: 346px;
  justify-content: space-around;
  padding-top: 40px;
  gap: 10px;
  display: flex;
  align-items: flex-start;
`

export const IconInstagram = styled(FiInstagram)`
  width: 54px;
  background-color: #222326;
  border-radius: 30px;
  padding: 13px;
  height: auto;
  color: #fff;

  &:hover {
    color: #1ed760;
    cursor: pointer;
  }
`
export const IconTwitter = styled(FiTwitter)`
  width: 54px;
  background-color: #222326;
  border-radius: 30px;
  padding: 13px;
  height: auto;
  color: #fff;

  &:hover {
    color: #1ed760;
    cursor: pointer;
  }
`
export const IconFacebook = styled(FiFacebook)`
  width: 54px;
  background-color: #222326;
  border-radius: 30px;
  padding: 13px;
  height: auto;
  color: #fff;

  &:hover {
    color: #1ed760;
    cursor: pointer;
  }
`
