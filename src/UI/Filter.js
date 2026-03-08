import styled from "styled-components";
import { small } from "../responsive";

export const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    ${small({ justifyContent: 'space-between', width: '100%' })}
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;