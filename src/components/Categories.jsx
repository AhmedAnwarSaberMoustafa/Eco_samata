import React from 'react'
import { categories } from '../data'
import CategoriesContainer from '../UI/Containers/CategoriesContainer'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <CategoriesContainer>
      {categories.map(el => (
        <CategoryItem key={el.id} title={el.title} img={el.img_url} cat={el.cat} />
      ))}
    </CategoriesContainer>
  )
}

export default Categories