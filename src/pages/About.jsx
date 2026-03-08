import React from 'react'
import { useInView } from 'react-intersection-observer'
import { CountUp } from 'use-count-up'

import styled from 'styled-components'
import { MailOutline, Phone } from '@mui/icons-material'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Container from '../UI/Containers/Container'
import Title from '../UI/Title'

const Wrapper = styled.div`
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 20%, rgba(209, 239, 224, 0.7) 0, rgba(209, 239, 224, 0) 30%),
    radial-gradient(circle at 90% 18%, rgba(255, 224, 188, 0.7) 0, rgba(255, 224, 188, 0) 28%),
    #fcfbf8;
`

const Main = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 1.25rem;
`

const MainImage = styled.img`
  width: min(1100px, 96vw);
  border-radius: 18px;
  box-shadow: 0 22px 50px rgba(16, 52, 42, 0.25);
  @media (max-width : 576px) {
    height: 240px;
    object-fit: cover;
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  color: #ffffff;
  text-align: center;

  h1 {
    font-size: clamp(1.3rem, 3vw, 2.4rem);
    letter-spacing: 0.12em;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    color: #e8fff3;
  }
`

const SomeInfo = styled.div`
  margin: 2.25rem auto;
  width: min(920px, 92vw);
  font-weight: 600;
  font-size: clamp(1rem, 2.1vw, 1.35rem);
  line-height: 1.9;
  color: #324540;
  text-align: center;
  padding: 1rem 1.2rem 1.8rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 80px);
    width: 160px;
    height: 4px;
    border-radius: 6px;
    background: linear-gradient(90deg, #18684e, #f5b87d);
  }
`

const OurStatistics = styled.div`
  margin: 2rem auto;
  width: min(1100px, 95vw);
  border-radius: 18px;
  background: linear-gradient(120deg, #174d3b 0%, #256a54 55%, #2f7f62 100%);
  padding: 1.6rem 1rem;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Statistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  min-height: 120px;
  color: #fff;
`

const Count = styled.p`
  font-size: 1.85rem;
  font-weight: 700;
`;

const StatisticTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const Info = styled.div`
  width: min(980px, 94vw);
  margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const StoryCard = styled.div`
  background: #ffffff;
  border: 1px solid #dbe8e1;
  border-radius: 14px;
  padding: 1.2rem;
`

const ContactCard = styled(StoryCard)`
  background: linear-gradient(180deg, #ffffff 0%, #f4fbf7 100%);
`

const Paragraph = styled.p`
  font-size: 1.06rem;
  line-height: 1.75;
  color: #4d5c58;
  margin: 0 0 0.95rem;
`

const Image = styled.img`
  margin: 1rem 0;
  width: 100%;
  border-radius: 12px;
`

const ContactLine = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.45rem 0;
  font-weight: 600;
  color: #2e4840;
`

const FALLBACK_ABOUT_IMAGE = 'https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1200';

const setFallbackImage = (event) => {
  if (event.currentTarget.src !== FALLBACK_ABOUT_IMAGE) {
    event.currentTarget.src = FALLBACK_ABOUT_IMAGE;
  }
}

const animationDuration = 2.5
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
    rootMargin: '0px 0px 0px 0px'
  });
  return (
    <Container >
      <Navbar />
      <Wrapper>
        <Main>
          <MainImage
            src='https://corporate.defacto.com.tr/assets/img/bg/hakkimizda.jpg'
            alt='about banner'
            onError={setFallbackImage}
          />
          <HeroOverlay>
            <h1>ABOUT US</h1>
            <p>Built for modern style, reimagined for 2026</p>
          </HeroOverlay>
        </Main>
        <SomeInfo>
          In 2026, E-Commerce continues its journey to deliver high-quality fashion with a smoother digital shopping experience for every customer in Egypt and beyond.
        </SomeInfo>
        <OurStatistics >
          <Statistic ref={ref}>
            <Count>
              {inView && <CountUp isCounting start={0} end={48} duration={animationDuration} />}
            </Count>
            <StatisticTitle>Countries</StatisticTitle>
          </Statistic>
          <Statistic>
            <Count>
              {inView && <CountUp isCounting start={0} end={620} duration={animationDuration} />}
              +
            </Count>
            <StatisticTitle>Stores</StatisticTitle>
          </Statistic>
          <Statistic>
            <Count>
              {inView && <CountUp isCounting start={0} end={31000} duration={animationDuration} />}
              +
            </Count>
            <StatisticTitle>Team Members</StatisticTitle>
          </Statistic>
        </OurStatistics>
        <Info>
          <StoryCard>
            <Title style={{ marginBottom: '1rem' }}>Our Story in 2026</Title>
            <Paragraph>
              E-Commerce was created to make fashion discovery simple, fast, and enjoyable. In 2026, our focus is clearer than ever: premium quality, fair pricing, and customer-first service.
            </Paragraph>
            <Paragraph>
              We curate essential products, seasonal drops, and daily styles so shoppers can build confident looks without overpaying. Every design decision in this website is made to reduce friction and help you place orders quickly.
            </Paragraph>
            <Image
              src="https://corporate.defacto.com.tr/assets/img/hakkimizda.jpg"
              alt="about-us"
              onError={setFallbackImage}
            />
            <Paragraph>
              Our next step for 2026 is expanding local delivery coverage, improving customer support response time, and releasing more category collections for all tastes.
            </Paragraph>
          </StoryCard>

          <ContactCard>
            <Title style={{ marginBottom: '1rem' }}>Direct Contact</Title>
            <Paragraph>
              Need help with an order, product sizing, or payment issue? Reach us directly and our team will assist you.
            </Paragraph>
            <ContactLine>
              <Phone fontSize='small' />
              01126989864
            </ContactLine>
            <ContactLine>
              <MailOutline fontSize='small' />
              devahmedanwer@gmail.com
            </ContactLine>
            <Paragraph>
              Updated for 2026.
            </Paragraph>
          </ContactCard>
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default About