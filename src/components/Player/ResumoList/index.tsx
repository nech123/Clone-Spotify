import React from 'react'

import {
  Container,
  MoveStatus,
  MoveDirection,
  IconBack,
  IconGo,
  ProfileName,
  GoUpgrade,
  ProfileAcc,
  IconProfile,
  IconMore,
  GoodTime,
  Good,
  Tumble,
  RecentsVist,
  TextTumbler,
  IconPlays,
  GoNow,
  ProfileNow,
  ContainerStatus,
  TumbleOne,
  TumbleTwo,
  TumbleTree,
  ImageTumbler1,
  ImageTumbler2,
  ImageTumbler3,
  ImageTumbler4,
  ImageTumbler5,
  ImageTumbler6
} from './styles.ts'

export function ResumoList() {
  return (
    <Container>
      <ContainerStatus>
        <MoveStatus>
          <MoveDirection>
            <IconBack />
            <IconGo />
          </MoveDirection>

          <ProfileName>
            <GoNow>
              <GoUpgrade>Faça upgrade</GoUpgrade>
            </GoNow>

            <ProfileAcc>
              <IconProfile />
              <ProfileNow>Ruivaldo</ProfileNow>
              <IconMore />
            </ProfileAcc>
          </ProfileName>
        </MoveStatus>

        <GoodTime>
          <Good> Boa Noite </Good>
        </GoodTime>
      </ContainerStatus>

      <Tumble>
        <TumbleOne>
          <RecentsVist>
            <ImageTumbler1 />
            <TextTumbler>Pink Floyd: The Dark Side of the Moon</TextTumbler>
            <IconPlays />
          </RecentsVist>

          <RecentsVist>
            <ImageTumbler2 />
            <TextTumbler>Avenged Sevenfold: Nightmare</TextTumbler>
            <IconPlays />
          </RecentsVist>
        </TumbleOne>

        <TumbleTwo>
          <RecentsVist>
            <ImageTumbler3 />
            <TextTumbler>Skank: Carrossel</TextTumbler>
            <IconPlays />
          </RecentsVist>

          <RecentsVist>
            <ImageTumbler4 />
            <TextTumbler>The Beatles: Please Please Me</TextTumbler>
            <IconPlays />
          </RecentsVist>
        </TumbleTwo>
        <TumbleTree>
          <RecentsVist>
            <ImageTumbler5 />
            <TextTumbler>Iron Maiden: The Number of the Beast</TextTumbler>
            <IconPlays />
          </RecentsVist>

          <RecentsVist>
            <ImageTumbler6 />
            <TextTumbler>Led Zeppelin: Led Zeppelin</TextTumbler>
            <IconPlays />
          </RecentsVist>
        </TumbleTree>
      </Tumble>
    </Container>
  )
}

export default ResumoList
