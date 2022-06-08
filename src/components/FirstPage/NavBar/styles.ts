import styled from 'styled-components'
import spotifyLogo from '../../../assets/spotifyLogo.png'
import { FiUser } from 'react-icons/fi'

export const Body = styled.body`
  display: flex;
  flex-direction: row;
  background-color: black;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled.h1`
  width: 140px;
  height: 140px;
  margin-left: 346px;
  background-position: center;
  background-size: 140px;
  text-indent: -9999px;
  background-image: url(${spotifyLogo});
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`
export const Menu = styled.ul`
  font-size: 16px;
  line-height: 15px;
  flex-direction: row;
  display: flex;
  gap: 30px;
  color: white;
  list-style: none;
  margin-right: 400px;
  align-items: center;
  font-family: Helvetica;
  font-weight: bold;
`
export const Icon = styled(FiUser)`
  padding: 3px;
  font-size: 37px;
  color: white;
  border: 2px solid white;
  border-radius: 18px;

  &:hover {
    color: #1ed760;
    background-color: white;
    cursor: pointer;
  }
`

export const Tips = styled.li`
  &:hover {
    color: #1ed760;
    cursor: pointer;
  }

  &:nth-child(4) {
    color: white;
    cursor: default;
  }
`
