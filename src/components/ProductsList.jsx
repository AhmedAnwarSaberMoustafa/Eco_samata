import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import API_BASE_URL from '../api_route'
import { popularProducts } from '../data'
import ProductsContainer from '../UI/Containers/ProductsContainer'
import ProductItem from './ProductItem'
const emptyFunction = () => { }

const getFallbackProducts = (cat, pathName) => {
  const baseProducts = pathName === '/'
    ? popularProducts.slice(0, 8)
    : (cat ? popularProducts.filter((product) => product.cat === cat) : popularProducts);

  return baseProducts;
}

function ProductsList({ cat, sort, setLoading = emptyFunction, isLoading }) {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url;
    if (location.pathname === '/')
      url = '/product/top'
    else url = `/product?category=${cat}`
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const req = await fetch(API_BASE_URL + url);
        if (!req.ok) {
          throw new Error(`Failed to fetch products: ${req.status}`)
        }

        const responseData = await req.json();
        if (responseData?.ok === false) {
          setProducts(getFallbackProducts(cat, location.pathname))
          return;
        }

        // Support multiple backend response shapes to avoid runtime map errors.
        const normalizedProducts = Array.isArray(responseData)
          ? responseData
          : responseData?.products || responseData?.data || [];

        const safeProducts = Array.isArray(normalizedProducts) ? normalizedProducts : [];
        setProducts(safeProducts.length ? safeProducts : getFallbackProducts(cat, location.pathname))
      } catch (e) {
        console.log(e)
        setProducts(getFallbackProducts(cat, location.pathname))
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [cat, location.pathname, setLoading])

  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "des") {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [cat, sort]);
  // console.log(products)
  return (
    <ProductsContainer isLoading={isLoading}>
      {products?.map(el => {
        const productId = el._id ?? el.id;
        return (
          <ProductItem
            img={el.img}
            key={productId}
            id={productId}
            title={el.title}
            price={el.price}
          />
        )
      }
      )}
    </ProductsContainer>
  )
}

export default ProductsList