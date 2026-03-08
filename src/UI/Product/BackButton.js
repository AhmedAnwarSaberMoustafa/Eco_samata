import styled from "styled-components";
import { small } from "../../responsive";

const BackButton = styled.div`
    height: fit-content;
    position: absolute;
    top: 20px;
    left: 30px;
    background: #3aada2;
    width: 75px;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    cursor: pointer;
    z-index: 10000;
    ${small({ left: 10, top: 10, width: 70 })}
`


export default BackButton;