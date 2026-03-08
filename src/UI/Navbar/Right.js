import styled from "styled-components";

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
.menu-item{
  position: relative;
  transition: 0.15s ease-in-out;
}
.menu-item__active{
  background-color: rgba(0, 0, 0, 0.04)
}
.menu-item::after,
.menu-item__active::after
{
  content: '';
  position: absolute;
  width: 90%;
  height: 0px;
  background-color: #1976d2;
  bottom: 0;
  left: 5%;
  transition: 0.15s ease-in-out; 
}

.menu-item:hover::after,
.menu-item__active:after{
  height: 2px;
}
/* .menu-item:focus::after{
  height: 2px;
} */
.menu-item:hover{
  opacity: 0.9;
}
@media (max-width : 678px) {
  .menu__item__mui{
    padding: 1rem 0.25rem;
  }
}
@media (max-width : 576px) {
  .menu__item__mui{
    font-size: 0.75rem;
  }
}
`

export default Right;