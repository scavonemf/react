import React, { Fragment } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import {Link } from '@reach/router'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

import { FavButton } from '../FavButton'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({id, likes = 0, src= DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, ref] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  const [toggleLike] = ToggleLikeMutation()
  const handleFavClick = () => {
    setLiked(!liked)
    toggleLike({ variables: { input: { id: id } } })
  }

  return (
    <Article ref={ref}>
      {
        show && 
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton
            liked={liked} likes={likes}
            onClick={handleFavClick} />
        </Fragment>
      }
    </Article>
  )
}
