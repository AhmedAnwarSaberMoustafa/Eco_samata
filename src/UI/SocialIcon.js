import styled from "styled-components";

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px ;
  color: #FFF;
  background-color: ${props => props.bg ? props.bg : ''};
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
`
export default SocialIcon;