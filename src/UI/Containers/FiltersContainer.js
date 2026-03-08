import styled from "styled-components";
import { small } from "../../responsive";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;
  ${small({ flexDirection: 'column', gap: '1rem' })}
`;

export default FiltersContainer;