import React, { Fragment } from 'react'

import { GlobalStyle } from './GlobalStyles'

import { ListOfCategories }  from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
)