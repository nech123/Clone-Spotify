import React from 'react'
import { ButtonSecundary } from './styles'

interface Props {
  title: string
}

export function Button({ title }: Props) {
  return <ButtonSecundary>{title}</ButtonSecundary>
}

export default Button
