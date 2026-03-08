import styled from "styled-components";

const FilterColor = styled.div`
  width : 20px;
  height : 20px;
  border-radius: 50%;
  background-color: ${props => props.color ? props.color : ''};
  border : 3px solid transparent;
  cursor: pointer;
  &.active{
    border : 3px solid white;
  }
`

export default FilterColor;