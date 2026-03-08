import styled from "styled-components";

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg ? props.bg : ''};
`

export default Slide;