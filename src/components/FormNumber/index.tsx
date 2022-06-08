import {
  ContainerNumber,
  Warning,
  InputDDD,
  InputNumber,
  ContainerInputs
} from './styles.ts'

import ButtonEnter from '../MenuLogin/ButtonForm/index.tsx'
import TitleForm from '../MenuLogin/TitleForm/index.tsx'
import React from 'react'
export default function FormNumber() {
  return (
    <>
      <TitleForm></TitleForm>
      <ContainerNumber>
        <Warning>Insira um número de telefone</Warning>
        <ContainerInputs>
          <InputDDD placeholder="+55"></InputDDD>
          <InputNumber placeholder="Número de Telefone"></InputNumber>
          <ButtonEnter title="AVANÇAR"></ButtonEnter>
        </ContainerInputs>
      </ContainerNumber>
    </>
  )
}
