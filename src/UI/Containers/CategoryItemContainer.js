import styled from "styled-components";
import { small } from "../../responsive";

const CategoryItemContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  height: 70vh;
  ${small({ maxHeight: '60vh' })}
  .info{
    position: absolute;
    width : 100%;
    height : 100%;
    display: flex;
    justify-content : center ;
    align-items : center;
    flex-direction: column;
    color: #fff;
  }
  .title{
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
  .btn{
    border: none;
    outline: none;
    padding: 0.5rem 0.75rem;
    background-color: #fff;
    color: grey;
    font-weight: 500;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .img{
    width : 100%;
    object-fit : cover;
  }
`

export default CategoryItemContainer;