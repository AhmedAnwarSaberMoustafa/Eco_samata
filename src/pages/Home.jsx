import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CategoryBallsSlider from '../components/CategoryBallsSlider'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'
import Slider from '../components/Slider'

const Page = styled.div`
  background:
    radial-gradient(circle at 8% 15%, rgba(207, 237, 223, 0.8) 0, rgba(207, 237, 223, 0) 34%),
    radial-gradient(circle at 88% 38%, rgba(251, 229, 202, 0.72) 0, rgba(251, 229, 202, 0) 30%),
    #fefdfb;
`

const Hero = styled.section`
  margin: 1rem;
  border-radius: 16px;
  padding: 1.2rem;
  background: linear-gradient(120deg, #143528, #245241 60%, #2f7057);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const HeroTitle = styled.h1`
  font-size: 1.55rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.4rem;
`

const HeroText = styled.p`
  color: #dcf6e8;
  max-width: 600px;
`

const HeroButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.7rem 1.1rem;
  background-color: #f6d7a6;
  color: #172f24;
  font-weight: 700;
  cursor: pointer;
`

const Section = styled.section`
  margin: 1.2rem 0;
  padding: 0 0.75rem;
`

const SectionTitle = styled.h2`
  margin: 0.25rem 0.9rem 0.9rem;
  font-size: 1.35rem;
  text-align: center;
`

function Home() {
  return (
    <Page>
      <Navbar />
      <Hero>
        <div>
          <HeroTitle>Fresh Fits, Fast Checkout</HeroTitle>
          <HeroText>Discover curated drops and complete your order in seconds.</HeroText>
        </div>
        <Link to="/products" className="format">
          <HeroButton type="button">Browse Collection</HeroButton>
        </Link>
      </Hero>
      <Slider />
      <Section>
        <SectionTitle>Shop by Category</SectionTitle>
        <CategoryBallsSlider />
        <Categories />
      </Section>
      <Section>
        <SectionTitle>Popular Right Now</SectionTitle>
        <ProductsList />
      </Section>
      <Footer />
    </Page>
  )
}

export default Home

