import React, { useState, useCallback } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import FiltersContainer from '../UI/Containers/FiltersContainer';
import { Filter, FilterTitle } from '../UI/Filter';
import Title from '../UI/Title';
import { BounceLoader } from 'react-spinners';
import Overlay from '../components/Overlay';

const Container = styled.div``;
const Products = () => {
  const location = useLocation()
  const history = useHistory()
  let cat;
  if (location?.pathname?.split('/')?.length > 2)
    cat = location?.pathname?.split('/')[2]
  const [category, setCategory] = useState(cat || '')
  const [sort, setSort] = useState('newest')
  const [isLoading, setIsLoading] = useState(false)
  // console.log(isLoading)
  const setLoadingHandler = useCallback((state) => {
    setIsLoading(state)
  }, [])
  const changeCategoryHandler = (e) => {
    setCategory(prev => e.target.value)
    setSort(prev => 'newest')
    history.push(`/products/${e.target.value}`)
  }
  const changeSortHandler = (e) => {
    setSort(prev => e.target.value)
  }
  const formatTitle = (text) => {
    // console.log(text)
    let newForm = text;
    newForm = newForm.split("");
    newForm[0] = newForm[0].toUpperCase();
    newForm = newForm.join("");
    return newForm;
  }



  return (
    <>
      {isLoading && <Overlay />}
      {isLoading
        &&
        <BounceLoader
          color="#36d7b7"
          speedMultiplier={1.5}
          className="loader"
        />
      }
      <Container>
        <Navbar />
        <Title style={{ margin: '1.5rem' }}>{formatTitle(category || "All Products")}</Title>
        <FiltersContainer>
          <Filter>
            <FilterTitle>Filter Products:</FilterTitle>
            <FormControl style={{ width: 170 }}>
              <InputLabel id="category">Choose Category</InputLabel>
              <Select
                style={{ height: 50 }}
                labelId="category"
                id="category"
                value={category}
                label="Choose Category"
                onChange={changeCategoryHandler}
              >
                <MenuItem value="">All Products</MenuItem>
                <MenuItem value="hoodies">Hoodies</MenuItem>
                <MenuItem value="t-shirts">T-shirts</MenuItem>
                <MenuItem value="jackets">Jackets</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
              </Select>
            </FormControl>
          </Filter>
          <Filter>
            <FilterTitle>Sort:</FilterTitle>
            <FormControl style={{ width: 120 }}>
              <InputLabel id="sort">Sort</InputLabel>
              <Select
                style={{ height: 50 }}
                labelId="sort"
                id="sort"
                value={sort}
                label="Sort"
                onChange={changeSortHandler}
              >
                <MenuItem value="newest">Newest</MenuItem>
                <MenuItem value="asc">Price(ASC)</MenuItem>
                <MenuItem value="des">Price(DES)</MenuItem>
              </Select>
            </FormControl>
          </Filter>
        </FiltersContainer>

        <ProductsList isLoading={isLoading} cat={category} sort={sort} setLoading={setLoadingHandler} />
        <Footer />
      </Container>
    </>
  )
}

export default Products