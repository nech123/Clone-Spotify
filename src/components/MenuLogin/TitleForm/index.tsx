import React from 'react'
import { Link } from 'react-router-dom'

import { ImageTitle, StatusBar } from './styles.ts'

export function TitleForm() {
  return (
    <StatusBar>
      <Link to="/">
        <ImageTitle>spotify</ImageTitle>
      </Link>
    </StatusBar>
  )
}

export default TitleForm
