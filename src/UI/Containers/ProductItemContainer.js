import styled from "styled-components";
import { small } from "../../responsive";


export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width  : 100%;
  height  : 100%;
  position: absolute;
  left : 0;
  top : 0;
  gap: 0.75rem;
  background-color: rgba(0,0,0,0.15);
  opacity: 0;
  z-index: 10;
  transition: all 0.3s ease;
`
export const ProductItemContainer = styled.div`
  flex : 1;
  margin: 0.25rem;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fafd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
  ${small({ minWidth: '140px' })}
.img{
  /* width: 100%; */
  height: 80%;
  max-width: 100%;
  object-fit: contain;
  z-index: 2;
}
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width : 40px;
  height : 40px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.25s ease;
  cursor: pointer;
  &:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
  }
`

export const Circle = styled.div`
  width  : 200px;
  height  : 200px;
  border-radius: 50%;
  position: absolute;
  background-color: #fff;
  ${small({ width: 170, height: 170 })}
`