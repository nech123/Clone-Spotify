import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  SplashScreen,
  MenuIniciar,
  ListInicial,
  IniciarIcon,
  BuscarIcon,
  SuaBibliotecaIcon,
  MenuSecundary,
  ListSecundary,
  PlayIcon,
  EpIcon,
  MusicIcon,
  Initialoptions,
  ListFavorite,
  ContainerExtends,
  BarraTransparent,
  InstallSpotify,
  IconInstall,
  InstallButton,
  CapaCD,
  ImageCD
} from './styles.ts'

export function MenuLateral() {
  return (
    <Container>
      <Link to="/">
        <SplashScreen></SplashScreen>
      </Link>
      <MenuIniciar>
        <ListInicial>
          <IniciarIcon></IniciarIcon>
          <Initialoptions>Início</Initialoptions>
        </ListInicial>

        <ListInicial>
          <BuscarIcon></BuscarIcon>
          <Initialoptions>Buscar</Initialoptions>
        </ListInicial>

        <ListInicial>
          <SuaBibliotecaIcon></SuaBibliotecaIcon>
          <Initialoptions>Sua Biblioteca</Initialoptions>
        </ListInicial>
      </MenuIniciar>

      <MenuSecundary>
        <ListSecundary>
          <PlayIcon></PlayIcon>
          <Initialoptions>Criar playlist</Initialoptions>
        </ListSecundary>

        <ListSecundary>
          <MusicIcon></MusicIcon>
          <Initialoptions>Música Curtidas</Initialoptions>
        </ListSecundary>

        <ListSecundary>
          <EpIcon></EpIcon>
          <Initialoptions>Seus episódios</Initialoptions>
        </ListSecundary>
        <BarraTransparent />
      </MenuSecundary>

      <ContainerExtends>
        <ListFavorite>Synthwave</ListFavorite>
        <ListFavorite>Castelo Ra tim Bum</ListFavorite>
        <ListFavorite>Serão Extra</ListFavorite>
        <ListFavorite>Coleção Samba</ListFavorite>
        <ListFavorite>BOOMM!!!!</ListFavorite>
        <ListFavorite>This is Mozart</ListFavorite>
        <ListFavorite>Rock atual</ListFavorite>
        <ListFavorite>As mais tocadas de 2028</ListFavorite>
        <ListFavorite>450! 0! = 1</ListFavorite>
        <ListFavorite>No Repeat</ListFavorite>
      </ContainerExtends>

      <InstallSpotify>
        <IconInstall />
        <InstallButton>Instalar Aplicativo</InstallButton>
      </InstallSpotify>

      <CapaCD>
        <ImageCD />
      </CapaCD>
    </Container>
  )
}

export default MenuLateral
