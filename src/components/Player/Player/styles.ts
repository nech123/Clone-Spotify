import styled from 'styled-components'

import { AiFillSound } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { CgMiniPlayer } from 'react-icons/cg'
import { FiPlay } from 'react-icons/fi'
import { BiRepeat } from 'react-icons/bi'
import { TbArrowsShuffle, TbMicrophone2, TbPlaylist } from 'react-icons/tb'
import { RiSkipBackMiniFill, RiSkipForwardMiniFill } from 'react-icons/ri'
import { MdDevices } from 'react-icons/md'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  flex-direction: row;
  background-color: black;
  margin-top: 80px;
  justify-content: space-between;
`
export const AllInfo = styled.div`
  width: 170px;
  display: flex;
`
export const InfoCD = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-left: 10px;
`
export const NomeMusica = styled.h1`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const NomeBanda = styled.h1`
  color: #fff;
  font-size: 12px;
  font-weight: 100;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const IconUsed = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  margin-left: 10px;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`

export const IconFavorite = styled(FaRegHeart)`
  width: 21px;
  height: 21px;
  color: white;
`
export const IconMinimaze = styled(CgMiniPlayer)`
  width: 21px;
  height: 21px;
  color: white;
`

export const PlayerContainer = styled.div`
  width: 650px;
  height: auto;
  display: flex;
  flex-direction: column;
`
export const PlayerSpotify = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const IconsPlayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 6px;
`
export const IconRandom = styled(TbArrowsShuffle)`
  width: 25px;
  height: 25px;
  color: #fff;
`
export const IconGoBack = styled(RiSkipBackMiniFill)`
  width: 30px;
  height: 30px;
  color: #fff;
`
export const IconPlay = styled(FiPlay)`
  width: 26px;
  height: 26px;
  border: 15px;
  background-color: gray;
  border-radius: 15px;
  padding: 6px;
`
export const IconGo = styled(RiSkipForwardMiniFill)`
  width: 30px;
  height: 30px;
  color: white;
`

export const IconReapear = styled(BiRepeat)`
  width: 25px;
  height: 25px;
  color: white;
`
export const LinePlayer = styled.div`
  width: 650px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
export const Time = styled.h1`
  color: white;
  font-size: 13px;
`
export const MarkerLine = styled.div`
  width: 500px;
  display: flex;
`
export const TimeGoBack = styled.h1`
  color: white;
  font-size: 13px;
`

export const IconDiverse = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`
export const IconMic = styled(TbMicrophone2)`
  width: 25px;
  height: 25px;
  color: white;
`
export const IconRow = styled(TbPlaylist)`
  width: 25px;
  height: 25px;
  color: white;
`
export const IconDevices = styled(MdDevices)`
  width: 25px;
  height: 25px;
  color: white;
`
export const IconSound = styled(AiFillSound)`
  width: 25px;
  height: 25px;
  color: white;
`
export const SoundLine = styled.div`
  width: 40px;
  height: 30px;
`
