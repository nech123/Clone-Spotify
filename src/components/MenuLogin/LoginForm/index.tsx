import React from 'react'
import { Link } from 'react-router-dom'
import ButtonEnter from '../ButtonForm/index.tsx'

import {
  Container,
  DivSocial,
  FacebookLogin,
  TextMain,
  AppleLogin,
  GoogleLogin,
  FoneLogin,
  Warning,
  DivVoid,
  TextDiv,
  DivOU,
  DivInputs,
  DivInput,
  SpanInput,
  InputLogin,
  PasswordIng,
  DivIng,
  DivRemanber,
  DivBorder,
  DivNoAcc,
  TextAcc,
  DivSub,
  DivSubscible,
  DivBorders
} from './styles.ts'

export function LoginForm() {
  return (
    <Container>
      <Warning>Para continuar, faça login no Spotify.</Warning>
      <DivSocial color="white" bg="#3b5998">
        <TextMain>CONTINUAR COM FACEBOOK</TextMain>
        <FacebookLogin></FacebookLogin>
      </DivSocial>

      <DivSocial color="#fff" bg="#241e1e">
        <TextMain> CONTINUAR COM A APPLE </TextMain>
        <AppleLogin></AppleLogin>
      </DivSocial>

      <DivSocial color="#6a6a6a" bg="#fff">
        <TextMain>CONTINUAR COM O GOOGLE</TextMain>
        <GoogleLogin></GoogleLogin>
      </DivSocial>

      <Link to="/fone">
        <DivSocial color="#6a6a6a" bg="#fff">
          <TextMain>CONTINUAR COM UM NÚMERO DE TELEFONE</TextMain>

          <FoneLogin></FoneLogin>
        </DivSocial>
      </Link>

      <DivOU>
        <DivVoid></DivVoid>
        <TextDiv>OU</TextDiv>
        <DivVoid></DivVoid>
      </DivOU>

      <DivInputs>
        <DivInput>
          <SpanInput>Endereço de e-mail ou nome de usuário</SpanInput>
          <InputLogin placeholder="Endereço de e-mail ou nome de usuário"></InputLogin>
        </DivInput>

        <DivInput>
          <SpanInput>Senha</SpanInput>
          <InputLogin placeholder="Senha"></InputLogin>
        </DivInput>
        <DivIng>
          <PasswordIng>Esqueçeu a senha?</PasswordIng>
        </DivIng>
      </DivInputs>

      <DivRemanber>
        <ButtonEnter title="ENTRAR"></ButtonEnter>
      </DivRemanber>

      <DivBorder>
        <DivBorders></DivBorders>
        <DivNoAcc>
          <TextAcc>Não tem conta ?</TextAcc>
        </DivNoAcc>
        <DivSub>
          <DivSubscible>INSCREVER-SE NO SPOTIFY</DivSubscible>
        </DivSub>
      </DivBorder>
    </Container>
  )
}

export default LoginForm
