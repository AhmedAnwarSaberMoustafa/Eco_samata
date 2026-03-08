import styled from "styled-components";

const SearchInput = styled.input`

max-width: calc(100% - 1.25rem);
background-color: transparent;
height: 1.25rem;
border: none;
outline: none;
color: #000;
&::placeholder{
  color: #000;
}
/* background-color: red; */
`

export default SearchInput;