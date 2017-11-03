import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavBar from './navbar.jsx';
import TextArea from './TextArea.jsx';
import Picture from './Picture.jsx';
import { Switch, Route } from 'react-router-dom';
import About from './About.jsx';
import Resume from './Resume.jsx';


const MainBody = styled.div`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat (4, 1fr);
    grid-template-areas:
        ". b a . ";
    @media only screen and (max-width: 1000px) {
      grid-template-areas:
        ". . a . "
        ". . b . "
    }
`

const TextBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        ". c c .  ";

    @media only screen and (max-width: 450px) {
        grid-template-areas:
            "c c c c"; 
} 

`
const Footer = styled.div`
    height: 100px;
`
const Main = (props) => {
    return (
        <div>
        <MainBody>
            <Picture />
            <NavBar />
        </MainBody>
        <TextBody>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/resume' component={Resume}/>
            </Switch>
        </TextBody>
        <Footer />
        </div>
    );

}

export default Main;