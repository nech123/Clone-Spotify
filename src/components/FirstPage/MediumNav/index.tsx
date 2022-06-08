import React from 'react'
import {
  ButtonDesktop,
  Header,
  MusicStore,
  SubTitle,
  SubHeader,
  ImageCircle
} from './styles.ts'

export function MediumNav() {
  return (
    <Header>
      <SubHeader>
        <MusicStore>É música que você quer?</MusicStore>
        <SubTitle>Ouça os melhores lançamentos do momento.</SubTitle>
        <ButtonDesktop>ACESSE O WEB PLAYER</ButtonDesktop>
      </SubHeader>
      <ImageCircle></ImageCircle>
    </Header>
  )
}

export default MediumNav
