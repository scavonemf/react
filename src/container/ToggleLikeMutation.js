import React from 'react'

import { gql } from "apollo-boost"
import { useMutation } from 'react-apollo'

export const ToggleLikeMutation = (id) => {
  const LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
      likeAnonymousPhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `
  const [toggleLike] = useMutation(LIKE_PHOTO)
  return [toggleLike]
}