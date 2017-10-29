import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



const StyledTextArea = styled.div`
    ${'' /* background: lightgreen; */}
    display: grid;
    grid-column: 2 / 7;
    margin: 15px;
    ${'' /* display:flex;
    flex: 1 1 auto;
    flex-wrap: nowrap; */}
`
const TextArea = (props) => {
        return (
            <StyledTextArea>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, nisi! Reprehenderit dolorum minus accusantium odio delectus, optio ut, possimus a, earum in ullam libero expedita dolorem sapiente exercitationem eum sunt!  
            </StyledTextArea>
            
        );  
    }

export default TextArea;