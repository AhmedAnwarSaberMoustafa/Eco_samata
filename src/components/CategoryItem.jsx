import React from 'react'
import { Link } from 'react-router-dom'
import CategoryItemContainer from '../UI/Containers/CategoryItemContainer'

function CategoryItem(props) {
  // console.log(props)
  return (
    <CategoryItemContainer>
      <Link to={`/products/${props.cat}`} style={{ display: 'flex', width: '100%' }}>
        <img className="img" src={props.img} alt="category" />
        <div className='info'>
          <h2 className='title'>{props.title}</h2>
          <button className='btn'>Shop Now</button>
        </div>
      </Link>
    </CategoryItemContainer>
  )
}

export default CategoryItem