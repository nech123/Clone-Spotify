import styled from 'styled-components'
import spotifyLogo from '../../../assets/spotify-logo.svg'
import skankCapa from '../../../assets/skankCapa.jpg'

import { AiFillHome } from 'react-icons/ai'
import { BsSearch, BsPlusSquareFill } from 'react-icons/bs'
import { ImBooks, ImHeart } from 'react-icons/im'
import { MdOutlineDownloading } from 'react-icons/md'
import { HiClipboardCheck } from 'react-icons/hi'

export const Container = styled.div`
  position: fixed;
  width: 230px;
  height: 860px;
  display: flex;
  flex-direction: column;
  background-color: #000;
`
export const SplashScreen = styled.h1`
  background-image: url(${spotifyLogo});
  background-size: 180px;
  background-repeat: no-repeat;
  width: 100%;
  height: 76px;
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  display: flex;
  flex-direction: column;
`
export const MenuIniciar = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
`
export const ListInicial = styled.div`
  width: 250px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #a6a6a6;
  }
`

export const Initialoptions = styled.h1`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    cursor: pointer;
    color: #a6a6a6;
  }
`

export const ListSecundary = styled.h1`
  width: 300px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #020d0f;
  }
`
export const MenuSecundary = styled.h1`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const IniciarIcon = styled(AiFillHome)`
  width: 24px;
  height: 24px;
  color: #fff;
  margin-left: 4px;
`

export const BuscarIcon = styled(BsSearch)`
  width: 20px;
  height: 20px;
  color: #fff;
  margin-left: 5px;
`
export const SuaBibliotecaIcon = styled(ImBooks)`
  width: 25px;
  height: 25px;
  color: #fff;
  margin-left: 6px;
`

export const PlayIcon = styled(BsPlusSquareFill)`
  width: 30px;
  height: 30px;
  color: #fff;
  margin-left: 5px;
`
export const MusicIcon = styled(ImHeart)`
  width: 30px;
  margin-left: 5px;
  height: 30px;
  color: #fff;
  padding: 8px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
`
export const EpIcon = styled(HiClipboardCheck)`
  width: 35px;
  height: 35px;
  color: white;
`

export const ContainerExtends = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  overflow: auto;
`
export const ListFavorite = styled.h1`
  color: #a6a6a6;
  font-size: 15px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  flex-direction: column;
  font-weight: 400;
  margin: 2px;
  margin-top: 12px;
  margin-left: 13px;

  &:hover {
    cursor: pointer;
    color: #fff;
  }
`

export const BarraTransparent = styled.h1`
  border-top: 1px solid #a6a6a6;
  border-width: 0.5px;
  border-color: #a6a6a6;
`
export const InstallSpotify = styled.div`
  width: 100%;
  height: 38px;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`
export const IconInstall = styled(MdOutlineDownloading)`
  width: 40px;
  height: 25px;
  color: white;
`
export const InstallButton = styled.text`
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
`
export const CapaCD = styled.div`
  width: 100%;
  height: 225px;

  &:hover {
    cursor: pointer;
  }
`

export const ImageCD = styled.h1`
  width: 100%;
  height: 100%;
  background-image: url(${skankCapa});
  background-size: 230px;
  background-repeat: no-repeat;
  background-position: center;
`
