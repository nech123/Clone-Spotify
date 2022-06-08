import React from 'react'
import { ProgressBar } from '../ProgressBar'
import {
  Container,
  AllInfo,
  InfoCD,
  NomeMusica,
  NomeBanda,
  IconUsed,
  IconFavorite,
  IconMinimaze,
  PlayerSpotify,
  IconsPlayer,
  IconRandom,
  IconGoBack,
  IconPlay,
  IconGo,
  IconReapear,
  LinePlayer,
  Time,
  MarkerLine,
  TimeGoBack,
  IconDiverse,
  IconMic,
  IconRow,
  IconDevices,
  IconSound,
  SoundLine,
  PlayerContainer
} from './styles.ts'

export function PlayerMusic() {
  return (
    <Container>
      <AllInfo>
        <InfoCD>
          <NomeMusica>Três Lados</NomeMusica>
          <NomeBanda>Skank</NomeBanda>
        </InfoCD>
        <IconUsed>
          <IconFavorite />
          <IconMinimaze />
        </IconUsed>
      </AllInfo>

      <PlayerContainer>
        <PlayerSpotify>
          <IconsPlayer>
            <IconRandom />
            <IconGoBack />
            <IconPlay />
            <IconGo />
            <IconReapear />
          </IconsPlayer>
        </PlayerSpotify>

        <LinePlayer>
          <Time>2:22</Time>
          <MarkerLine>
            <ProgressBar width={530} />
          </MarkerLine>
          <TimeGoBack>1:02</TimeGoBack>
        </LinePlayer>
      </PlayerContainer>

      <IconDiverse>
        <IconMic />
        <IconRow />
        <IconDevices />
        <IconSound />
        <ProgressBar width={100} />
      </IconDiverse>
    </Container>
  )
}

export default PlayerMusic
