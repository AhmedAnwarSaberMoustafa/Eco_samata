import styled from "styled-components";
import { small } from "../../responsive";

export const Middle = styled.div`
flex : 1;
/* display: flex; */
/* align-items: center; */
/* justify-content: space-evenly; */
/* flex-direction: column; */
padding: 0 2rem;
${small({ padding: 0, display: 'none' })}

`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  /* gap: 0.5rem; */
`;

export const ListItem = styled.li`
  width: 50%;
  margin: 0 0 0.5rem;
`;