import { DivLabel, DivAux, LabelInter, ButtonGo } from './styles.ts'
import React from 'react'

interface Props {
  title: string
}

export default function ButtonEnter({ title }: Props) {
  return (
    <DivLabel>
      <DivAux>
        <input type="checkbox" />
        <LabelInter>Lembrar de mim</LabelInter>
      </DivAux>
      <ButtonGo>{title}</ButtonGo>
    </DivLabel>
  )
}
