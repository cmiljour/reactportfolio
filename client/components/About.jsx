import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const StyledTextArea = styled.div`
    ${'' /* background: lightgreen; */}
    grid-area: c;
    justify-self: center;
    padding-top: 20px;
    /* margin: 15px;
    padding-left: 20px; */
    ${'' /* display:flex;
    flex: 1 1 auto;
    flex-wrap: nowrap; */}
`
const centerTxt = {
    textAlign: 'center'
};
const About = (props) => {
        return (
            <StyledTextArea>
            <h1 style={centerTxt}>Cory Miljour</h1>
            <p style={centerTxt}>cormil@gmail.com | 773-640-3259 | Chicago, Illinois</p>
            <p>I currently live in Chicago, Illinois in the Avondale neighborhood. Chicago has been my home on and off for the last 15 years. Previous residences include Asheville NC, New York NY, Paris France, India, and Madison WI. I am open to work location and remote working.</p>
            
            <p>You will find links below to my Github pages which exemplify my programming prowess. This site was also created by me using Bootstrap/Html/CSS. </p>
            
            What can I do for you? I can build your computer network, servers, and desktop computers that live within. I can also create browser based programs to manipulate your data. I have over 18 years of professional IT experience to trust with your company technology.            
            </StyledTextArea>
            
        );  
    }

export default About;