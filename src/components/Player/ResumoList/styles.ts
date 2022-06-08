import styled from 'styled-components'
import { IoChevronBackSharp, IoPersonCircle } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { BsCaretDownFill } from 'react-icons/bs'
import { BiPlay } from 'react-icons/bi'
import Pink from '../../../assets/capas/Pink.jpg'
import A7x from '../../../assets/capas/A7x.jpg'
import Skankcarrosel from '../../../assets/capas/Skankcarrossel.jpg'
import Beatles from '../../../assets/capas/Beatles.jpg'
import Iron from '../../../assets/capas/Iron.jpg'
import Led from '../../../assets/capas/Led.jpg'

export const Container = styled.div`
  margin-left: 230px;
  width: auto;
  height: auto;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);

  flex-direction: column;
`

export const ContainerStatus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  height: 170px;
`
export const MoveStatus = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: transparent;
  justify-content: space-between;
  margin-top: 15px;
`
export const MoveDirection = styled.div`
  width: 70px;
  height: 40px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
`
export const IconBack = styled(IoChevronBackSharp)`
  background-color: #515151;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  color: white;

  &:hover {
    color: black;
    cursor: pointer;
  }
`
export const IconGo = styled(IoIosArrowForward)`
  background-color: #515151;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  color: white;

  &:hover {
    color: black;
    cursor: pointer;
  }
`
export const ProfileName = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`

export const GoNow = styled.div`
  width: 100px;
  height: 32px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
`
export const GoUpgrade = styled.h1`
  font-size: 13px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-weight: 500;

  &:hover {
    font-size: 14px;
    font-weight: bold;
  }
`

export const ProfileNow = styled.text`
  font-size: 15px;
  color: white;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    color: #a6a6a6;
    cursor: pointer;
  }
`

export const ProfileAcc = styled.div`
  width: 140px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 75px;
  background-color: black;
  gap: 10px;
`
export const IconProfile = styled(IoPersonCircle)`
  width: 30px;
  height: 30px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`
export const IconMore = styled(BsCaretDownFill)`
  width: 20px;
  height: 20px;
  color: white;

  &:hover {
    color: #a6a6a6;
    cursor: pointer;
  }
`
export const GoodTime = styled.div`
  margin-top: 40px;
  display: flex;
  width: auto;
  height: 40px;
  margin-left: 15px;
`
export const Good = styled.h1`
  color: white;
  font-size: 32px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
`
export const Tumble = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
`
export const RecentsVist = styled.div`
  width: 500px;
  display: flex;
  margin: 10px;
  flex-direction: row;
  justify-content: center;
  height: 86px;
`
export const TextTumbler = styled.h1`
  display: flex;
  flex-direction: column;
  background-color: #000;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 90%;
  text-align: start;
  color: #fff;
  justify-content: center;
  padding-left: 14px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`
export const IconPlays = styled(BiPlay)`
  width: 45px;
  height: 45px;
  color: white;
  position: absolute;
  background-color: green;
  margin-left: 220px;
  margin-top: 14px;
  border-radius: 30px;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`

export const TumbleOne = styled.div``
export const TumbleTwo = styled.div``
export const TumbleTree = styled.div``

export const ImageTumbler1 = styled.h1`
  width: 20%;
  height: auto;
  background-image: url(${Pink});
  background-size: 90px;
  background-position: center;
  background-repeat: no-repeat;
`
export const ImageTumbler2 = styled.h1`
  width: 20%;
  height: auto;
  background-image: url(${A7x});
  background-size: 90px;
  background-position: center;
  background-repeat: no-repeat;
`
export const ImageTumbler3 = styled.h1`
  width: 20%;
  height: auto;
  background-image: url(${Skankcarrosel});
  background-size: 90px;
  background-position: center;
  background-repeat: no-repeat;
`
export const ImageTumbler4 = styled.h1`
  width: 20%;
  height: auto;
  background-image: url(${Beatles});
  background-size: 90px;
  background-position: center;
  background-repeat: no-repeat;
`
export const ImageTumbler5 = styled.h1`
  width: 20%;
  height: auto;
  background-image: url(${Iron});
  background-size: 90px;
  background-position: center;
  background-repeat: no-repeat;
`
export const ImageTumbler6 = styled.h1`
  width: 20%;
  height: auto;
  background-image: url(${Led});
  background-size: 90px;
  background-position: center;
  background-repeat: no-repeat;
`
