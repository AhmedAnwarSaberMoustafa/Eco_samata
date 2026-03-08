import styled from "styled-components";
import { small } from "../../responsive";

const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  ${small({ flexDirection: 'column', padding: '0', gap: '0.5rem' })}
`

export default CategoriesContainer;