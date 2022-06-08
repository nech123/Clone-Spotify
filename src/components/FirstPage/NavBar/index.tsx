import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Body, Menu, Tips, Icon } from './styles.ts'

export function FirstPage() {
  return (
    <Body>
      <Image>Tiner</Image>
      <Menu>
        <Tips>Premium</Tips>
        <Tips>Suporte</Tips>
        <Tips>Baixar</Tips>
        <Tips>|</Tips>
        <Icon />
        <Link to="/login">
          <Tips>Perfil</Tips>
        </Link>
      </Menu>
    </Body>
  )
}

export default FirstPage
