import styled from 'styled-components'
import { small } from '../../responsive';

const Image = styled.img`
  width : 100%;
  height : 90vh;
  object-fit: contain;
  ${small({ height: '45vh' })}
`;

export default Image;