import styled from "styled-components";
import { small } from "../../responsive";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  ${small({ flexDirection: "column", gap: "0.75rem", background: "#f5f5f5" })}
`

export default Container;