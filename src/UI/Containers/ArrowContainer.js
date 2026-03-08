import styled from "styled-components";

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  background-color: #fff7f7;
  width: 50px;
  height: 50px;
  border-radius :50%;
  position: absolute;
  left : ${props => props.left ? props.left : ''};
  right : ${props => props.right ? props.right : ''};
  cursor: pointer;
  opacity: 0.5;
  z-index: 100;
`

export default ArrowContainer;