import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'

import Logo from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Details'
import { NavBar } from './components/NavBar'


const App = () => {

  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path="/detail/:detailId" />
      </Router>
      <NavBar />
    </div>
  )
}

export default App