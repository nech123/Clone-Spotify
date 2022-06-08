import styled from 'styled-components'

import Aleatorio1 from '../../../assets/capasDay/Aleatorio1.jpeg'
import Aleatorio2 from '../../../assets/capasDay/Aleatorio2.jpeg'
import Aleatorio3 from '../../../assets/capasDay/Aleatorio3.jpeg'
import Aleatorio4 from '../../../assets/capasDay/Aleatorio4.jpeg'
import Aleatorio5 from '../../../assets/capasDay/Aleatorio5.jpeg'
import Aleatorio6 from '../../../assets/capasDay/Aleatorio6.jpg'
import Eminen from '../../../assets/capasDay/Eminen.jpeg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-left: 230px;
  background-color: rgba(0, 0, 0, 0.9);
  height: 330px;
`
export const ContainerAux = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding-left: 25px;
`
export const StatusYou = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`
export const StatusText = styled.h1`
  font-size: 20px;
  margin-left: 30px;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
`
export const VisibleInfo = styled.h1`
  color: #a6a6a6;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;

  &:hover {
    color: #fff;
    font-size: 15px;
  }
`
export const Album = styled.h1`
  width: 190px;
  height: 240px;
  margin-top: 10px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 14px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
export const DivCapa = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const ImageCapa1 = styled.h1`
  background-image: url(${Aleatorio6});
  width: 200px;
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 160px;
  margin-top: 3px;
  border-radius: 49px;
`
export const ImageCapa2 = styled.h1`
  background-image: url(${Aleatorio1});
  width: 200px;
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 160px;
  margin-top: 5px;
  border-radius: 49px;
`
export const ImageCapa3 = styled.h1`
  background-image: url(${Aleatorio2});
  width: 200px;
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 160px;
  margin-top: 5px;
  border-radius: 49px;
`
export const ImageCapa4 = styled.h1`
  background-image: url(${Aleatorio3});
  width: 200px;
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 160px;
  margin-top: 5px;
  border-radius: 49px;
`
export const ImageCapa5 = styled.h1`
  background-image: url(${Aleatorio4});
  width: 200px;
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 160px;
  margin-top: 5px;
  border-radius: 49px;
`
export const ImageCapa6 = styled.h1`
  background-image: url(${Aleatorio5});
  width: 200px;
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 160px;
  margin-top: 5px;
  border-radius: 49px;
`
export const ImageCapa7 = styled.h1`
  background-image: url(${Eminen});
  width: 200px;
  height: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 160px;
  margin-top: 5px;
  border-radius: 49px;
`
export const DivAux = styled.div`
  width: 100%;
  height: 60px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 26px;
`
export const TitleStatus = styled.h1`
  color: #fff;
  font-size: 17px;
  display: flex;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const StatusSpan = styled.h1`
  color: #fff;
  font-size: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const StatusInfo = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: column;
`
