import React, { Fragment } from 'react'

import { GlobalStyle } from './styles/GlobalStyles'

import { ListOfCategories }  from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

import Logo from './components/Logo'

export const App = () => (
  <Fragment>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
)