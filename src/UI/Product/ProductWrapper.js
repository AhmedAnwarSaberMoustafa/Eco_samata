import styled from 'styled-components'
import { small } from '../../responsive';

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  position: relative;
  ${small({ flexDirection: 'column', alignItems: 'center', padding: '1rem 0' })}
`;

export default Wrapper;