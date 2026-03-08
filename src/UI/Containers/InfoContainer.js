import styled from "styled-components";

const InfoContainer = styled.div`
  flex: 1;
  padding: 4.5rem;
  .title{
    font-size: 70px;
  }
  .description{
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .btn{
    background-color: transparent;
    padding: 0.5rem 0.75rem;
    border: 2px solid #000;
    font-size: 1.1rem;
    cursor: pointer;
  }
  .btn:hover{

  }
`
export default InfoContainer;