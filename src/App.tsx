import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/index.tsx'
import Deshboard from './pages/Dashboard/index.tsx'
import LoginNumber from './pages/LoginNumber/index.tsx'
import Player from './pages/Player/index.tsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Deshboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/fone" element={<LoginNumber />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
