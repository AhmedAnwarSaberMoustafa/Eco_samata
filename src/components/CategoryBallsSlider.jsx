import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'

import { categories, popularProducts } from '../data'

const Wrapper = styled.div`
  width: min(1120px, 96vw);
  margin: 1.25rem auto 1.75rem;
  padding: 1.1rem 1rem 0.65rem;
  border-radius: 18px;
  background: linear-gradient(140deg, #f5fbf8 0%, #ffffff 55%, #fff4e8 100%);
  border: 1px solid #dde9e3;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const Hint = styled.p`
  color: #46615a;
  font-size: 1.05rem;
  font-weight: 600;
`

const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ControlButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid #cbddd4;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #21483d;
`

const SliderTrack = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0.35rem 0.15rem 0.7rem;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4d8ce;
    border-radius: 999px;
  }
`

const BallLink = styled(Link)`
  min-width: 170px;
  color: #1e2f2a;
  text-decoration: none;
  text-align: center;
`

const Ball = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 0.55rem;
  border-radius: 50%;
  border: 2px solid #dbe8e2;
  box-shadow: 0 10px 22px rgba(19, 51, 42, 0.12);
  background-color: #f4faf7;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${BallLink}:hover & {
    transform: translateY(-4px) scale(1.02);
    border-color: #83bca8;
  }

  @media (max-width: 678px) {
    width: 118px;
    height: 118px;
  }
`

const Label = styled.p`
  font-weight: 700;
  font-size: 1.02rem;
`

const formatLabel = (cat) => {
  if (cat === 't-shirts') return 'T-Shirts'
  if (cat === 'hoodies') return 'Hoodies'
  if (cat === 'jackets') return 'Jackets'
  if (cat === 'shoes') return 'Shoes'
  return cat
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function CategoryBallsSlider() {
  const sliderRef = useRef(null)

  const categoryItems = useMemo(() => {
    const byCat = new Map()

    popularProducts.forEach((product) => {
      if (product?.cat && !byCat.has(product.cat)) {
        byCat.set(product.cat, product.img)
      }
    })

    categories.forEach((category) => {
      if (category?.cat && !byCat.has(category.cat)) {
        byCat.set(category.cat, category.img_url)
      }
    })

    return [
      { cat: '', label: 'All', img: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600' },
      ...Array.from(byCat.entries()).map(([cat, img]) => ({
        cat,
        img,
        label: formatLabel(cat),
      })),
    ]
  }, [])

  const slide = (direction) => {
    if (!sliderRef.current) return
    const distance = direction === 'left' ? -220 : 220
    sliderRef.current.scrollBy({ left: distance, behavior: 'smooth' })
  }

  return (
    <Wrapper>
      <Header>
        <Hint>Slide to explore all categories</Hint>
        <Controls>
          <ControlButton type='button' onClick={() => slide('left')} aria-label='Slide categories left'>
            <ChevronLeftRoundedIcon fontSize='small' />
          </ControlButton>
          <ControlButton type='button' onClick={() => slide('right')} aria-label='Slide categories right'>
            <ChevronRightRoundedIcon fontSize='small' />
          </ControlButton>
        </Controls>
      </Header>

      <SliderTrack ref={sliderRef}>
        {categoryItems.map((item) => (
          <BallLink key={item.cat || 'all'} to={item.cat ? `/products/${item.cat}` : '/products'}>
            <Ball>
              <img src={item.img} alt={item.label} />
            </Ball>
            <Label>{item.label}</Label>
          </BallLink>
        ))}
      </SliderTrack>
    </Wrapper>
  )
}

export default CategoryBallsSlider