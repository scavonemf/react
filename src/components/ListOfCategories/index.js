import React, {Fragment, useEffect, useState} from 'react'

import { Category } from '../Category'

import { List, Item } from './styles'

// import { categories as mockCategories } from '../../../api/db.json'


function useCategoryData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return {
    categories, loading
  }
} 

export const ListOfCategories = () => {
  const { categories, loading } = useCategoryData()

  const [showFixed, setShowFixed] = useState(false)

  useEffect (function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll',
    onScroll)

    return () => { //clean
      document.removeEventListener('scroll', onScroll)
    }
  })

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
      {
        loading ? <Item key='loading'><Category /></Item> //defaul item
        :
        categories.map(category => <Item key={category.id}><Category  {...category}   path={`/pet/${category.id}`} /></Item>)
      }
    </List>
    )
  }

  return (
    <Fragment>
    {renderList()}
    {showFixed && renderList(true)}
    </Fragment>
  
  )
}