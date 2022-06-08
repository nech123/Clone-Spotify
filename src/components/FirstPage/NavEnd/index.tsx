import React from 'react'

import {
  FooterEnd,
  UlEnd,
  LiTips,
  UlStart,
  Terms,
  Ul,
  Litipers,
  IconsSocial,
  IconInstagram,
  IconTwitter,
  IconFacebook,
  Pais,
  PaisSelect,
  UlEndTwo,
  FirstTable,
  UlMedium,
  LinksTop,
  ImgFriq
} from './styles.ts'

export function NavEnd() {
  return (
    <FooterEnd>
      <FirstTable>
        <LinksTop>
          <ImgFriq></ImgFriq>

          <UlEnd>
            <LiTips>Empresa</LiTips>
            <LiTips>Sobre</LiTips>
            <LiTips>Empregos</LiTips>
            <LiTips>For the Record</LiTips>
          </UlEnd>

          <UlStart>
            <LiTips>Comunidade</LiTips>
            <LiTips>Por artistas</LiTips>
            <LiTips>Desenvolvedores</LiTips>
            <LiTips>Publicidade</LiTips>
            <LiTips>Investidores</LiTips>
            <LiTips>Fornecedores</LiTips>
          </UlStart>

          <UlMedium>
            <LiTips>Links Úteis</LiTips>
            <LiTips>Suporte</LiTips>
            <LiTips>Player Web</LiTips>
            <LiTips>Aplicativo Móvel grátis</LiTips>
          </UlMedium>

          <UlEndTwo>
            <IconsSocial>
              <IconInstagram></IconInstagram>
              <IconTwitter></IconTwitter>
              <IconFacebook></IconFacebook>
            </IconsSocial>
          </UlEndTwo>
        </LinksTop>
        <Terms>
          <Ul>
            <Litipers>Legal</Litipers>
            <Litipers>Centro de Privacidade</Litipers>
            <Litipers>Politicas de Privacidade</Litipers>
            <Litipers>Cookies</Litipers>
            <Litipers>Sobre anuncios</Litipers>
          </Ul>
          <Pais>
            <PaisSelect>Brasil</PaisSelect>
            <PaisSelect>2022 Spotify AB</PaisSelect>
          </Pais>
        </Terms>
      </FirstTable>
    </FooterEnd>
  )
}

export default NavEnd
