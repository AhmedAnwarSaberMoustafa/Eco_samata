import styled from "styled-components";
import { small } from "../../responsive";

export const SliderContainer = styled.div`
  height: calc(100vh - 65px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  ${small({ display: 'none' })}
`
export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: ${props => `TranslateX(${props.sliderPosition}vw)`};
  transition : 0.8s ease;
`

