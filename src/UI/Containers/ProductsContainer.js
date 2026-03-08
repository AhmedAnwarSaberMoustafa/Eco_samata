import styled from "styled-components";
import { small } from "../../responsive";

const ProductsContainer = styled.div`
  /* display: ${props => props.isLoading ? 'none' : 'flex'}; */
  display : flex;
  flex-wrap: wrap;
  padding: 1rem;
  ${small({ padding: 0 })}
  /* align-items: flex-start; */
  /* justify-content: flex-start; */
  /* justify-content: space-between */
`

export default ProductsContainer;