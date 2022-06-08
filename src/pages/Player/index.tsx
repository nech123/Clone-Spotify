import React from 'react'
import { Container } from './styles.ts'
import MenuLateral from '../../components/Player/MenuLateral/index.tsx'
import OuvidasRecentes from '../../components/Player/OuvidasRecentes/index.tsx'
import PlayerMusic from '../../components/Player/Player/index.tsx'
import ResumeList from '../../components/Player/ResumoList/index.tsx'
import SeusMix from '../../components/Player/SeusMix/index.tsx'
export default function Player() {
  return (
    <Container>
      <MenuLateral />
      <ResumeList />
      <OuvidasRecentes />
      <PlayerMusic />
      <SeusMix />
    </Container>
  )
}
