import React from 'react'
import { PhotoCard } from "../PhotoCard"

//high order component

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {

  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )

}

