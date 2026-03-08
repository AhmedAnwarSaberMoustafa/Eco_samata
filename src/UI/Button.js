import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background-color: transparent;
  border: 2px solid #1976d2;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover{
    background-color: #1976d2;
    border-color : transparent;
    color : #fff;
  }
`

export default Button;