import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



const StyledTextArea = styled.div`
    ${'' /* background: lightgreen; */}
    grid-area: c;
    margin: 15px;
    padding-left: 20px;
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