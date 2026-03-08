import styled from "styled-components";
import { tablet } from "../responsive";

const Logo = styled.h2`

font-weight: bold;
text-align: center;
${tablet({ fontSize: '1rem' })}

@media (max-width : 350px) {
  font-size: 0.7rem;

}
`
export default Logo;