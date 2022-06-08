import React from 'react'
import { TotalDiv, SecundaryDiv, SpanSecundary } from './styles.ts'
import Button from '../../../Button/index.tsx'

export function BodyFirst() {
  return (
    <TotalDiv>
      <SecundaryDiv>Seja Premium. Seja Feliz.</SecundaryDiv>
      <Button title="INICIAR TESTE GRÁTIS">INICIAR TESTE GRÁTIS</Button>
      <SpanSecundary>
        * Sujeito a Termos e Condições. Disponível apenas para usuário que ainda
        não experimentou o Premium
      </SpanSecundary>
    </TotalDiv>
  )
}

export default BodyFirst
