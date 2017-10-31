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
`

const TextBody = styled.div`
display: grid;
grid-template-columns: 1fr minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);
grid-template-rows: 1fr;
grid-template-areas:
    ". c c . ";

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
        </div>
    );

}

export default Main;