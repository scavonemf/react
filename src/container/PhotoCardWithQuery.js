import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

const query = gql`
   query getPhotos ($id: ID!){
      photo (id: $id){
         id
         categoryId
         src
         likes
         userId
         liked
      }
   }
`

export const PhotoCardWithQuery = (props) => {
  const { id } = props;
  const { data, loading } = useQuery(query, {variables: {id}})
  
  return (
     <>
     {loading 
        ? <h1>loading</h1>
        : <PhotoCard {...data.photo}/>
     }
     </>
  )
}
