import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



const StyledTextArea = styled.div`
    grid-area: c;
    @media only screen and (max-width: 768px) {
        display: flex;
    }
`
const TextArea = (props) => {
        return (
            <StyledTextArea>
            currently live in Chicago, Illinois in the Avondale neighborhood. Chicago has been my home on and off for the last 15 years. Previous residences include Asheville NC, New York NY, Paris France, India, and Madison WI. I am open to work location and remote working.

            You will find links below to my Github pages which exemplify my programming prowess. This site was also created by me using Bootstrap/Html/CSS.

            What can I do for you? I can build your computer network, servers, and desktop computers that live within. I can also create browser based programs to manipulate your data. I have over 18 years of professional IT experience to trust with your company technology.
            </StyledTextArea>           
        );  
    }

export default TextArea;