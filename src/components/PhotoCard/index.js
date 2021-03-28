import React, {Fragment, useEffect, useRef, useState} from 'react'
import {ImgWrapper, Img, Button, Article} from './styles'

import {MdFavoriteBorder} from 'react-icons/md'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"


export const PhotoCard = ({id, likes = 0, src= DEFAULT_IMAGE }) => {

  const ref = useRef(null) //catch dom element
  const [show, setShow] =useState(false)
  useEffect(function() {
    const observer = new window.IntersectionObserver(function(entries) {
      const {isIntersecting} = entries[0]
      if (isIntersecting) {
        console.log('si')
        setShow(true) //viewport true
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])

  return (
    <Article ref={ref}>
      {show && 
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />{likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}