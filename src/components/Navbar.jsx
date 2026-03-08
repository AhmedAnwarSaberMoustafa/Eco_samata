import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Container from '../UI/Containers/NavbarContainer'
import Center from '../UI/Navbar/Center'
import Left from '../UI/Navbar/Left'
import Right from '../UI/Navbar/Right'
import Wrapper from '../UI/Wrapper'
import SearchContainer from '../UI/Containers/SearchContainer';
import SearchInput from '../UI/Inputs/SearchInput';
import Logo from '../UI/Logo';

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  border: none;
  background: #0f4f3b;
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`

const MobileMenuPanel = styled.div`
  position: absolute;
  top: 58px;
  right: 10px;
  min-width: 190px;
  background: #ffffff;
  border: 1px solid #d5e0db;
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  padding: 0.35rem;
  display: none;
  z-index: 50;

  @media (max-width: 768px) {
    display: ${(props) => (props.$open ? 'block' : 'none')};
  }

  .mobile-link {
    display: block;
    border-radius: 8px;
    color: #1f2f29;
  }

  .mobile-link .menu__item__mui {
    width: 100%;
    justify-content: flex-start;
    font-size: 0.92rem;
  }

  .mobile-link-active {
    background-color: #e8f5ef;
  }
`

const MobileCartRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.7rem;
  font-size: 0.92rem;
  border-top: 1px dashed #d7e3dd;
  margin-top: 0.2rem;
`


function Navbar() {
  const searchInputRef = useRef();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const focusSearchHandler = () => {
    searchInputRef.current.focus();
  }
  const cart = useSelector(state => state.cart.cartItemsLength);

  const toggleMobileMenuHandler = () => {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer onClick={focusSearchHandler}>
            <SearchInput placeholder='Search' ref={searchInputRef} />
            <SearchIcon onClick={focusSearchHandler} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Commerce</Logo>
        </Center>
        <Right style={{ position: 'relative', justifyContent: 'flex-end' }}>
          <DesktopLinks>
            <NavLink exact to="/" className='format menu-item' activeClassName='menu-item__active'>
              <MenuItem className='menu__item__mui'>Home</MenuItem>
            </NavLink>
            <NavLink to="/products" className='format menu-item' activeClassName='menu-item__active'>
              <MenuItem className='menu__item__mui'>Products</MenuItem>
            </NavLink>
            <NavLink to="/about" className='format menu-item' activeClassName='menu-item__active'>
              <MenuItem className='menu__item__mui'>About</MenuItem>
            </NavLink>
            <NavLink to="/contact-us" className='format menu-item' activeClassName='menu-item__active'>
              <MenuItem className='menu__item__mui'>Contact us</MenuItem>
            </NavLink>
            <NavLink to="/cart" className='format menu-item' activeClassName='menu-item__active'>
              <MenuItem className='menu-item menu__item__mui'>
                <Badge badgeContent={cart} color='primary'>
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </MenuItem>
            </NavLink>
          </DesktopLinks>

          <MobileMenuButton type='button' onClick={toggleMobileMenuHandler} aria-label='Toggle mobile menu'>
            {isMobileMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </MobileMenuButton>

          <MobileMenuPanel $open={isMobileMenuOpen}>
            <NavLink exact to="/" className='format mobile-link' activeClassName='mobile-link-active'>
              <MenuItem className='menu__item__mui'>Home</MenuItem>
            </NavLink>
            <NavLink to="/products" className='format mobile-link' activeClassName='mobile-link-active'>
              <MenuItem className='menu__item__mui'>Products</MenuItem>
            </NavLink>
            <NavLink to="/about" className='format mobile-link' activeClassName='mobile-link-active'>
              <MenuItem className='menu__item__mui'>About</MenuItem>
            </NavLink>
            <NavLink to="/contact-us" className='format mobile-link' activeClassName='mobile-link-active'>
              <MenuItem className='menu__item__mui'>Contact us</MenuItem>
            </NavLink>
            <NavLink to="/cart" className='format mobile-link' activeClassName='mobile-link-active'>
              <MenuItem className='menu__item__mui'>Cart</MenuItem>
            </NavLink>
            <MobileCartRow>
              <span>Items in Cart</span>
              <Badge badgeContent={cart} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MobileCartRow>
          </MobileMenuPanel>
        </Right>
      </Wrapper>
    </Container>
  )
}



export default Navbar