import React from 'react'

import FirstPage from '../../components/FirstPage/NavBar/index.tsx'
import BodyFirst from '../../components/FirstPage/Header/index.tsx'
import MediumNav from '../../components/FirstPage/MediumNav/index.tsx'
import NavEnd from '../../components/FirstPage/NavEnd/index.tsx'

export default function Deshboard() {
  return (
    <>
      <FirstPage />
      <BodyFirst />
      <MediumNav />
      <NavEnd />
    </>
  )
}
