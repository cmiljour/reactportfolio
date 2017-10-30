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
    display: grid;
    ${'' /* margin-left: -40px; */}
    grid-template-columns: repeat (8, 1fr);
    grid-template-rows: repeat (2, 1fr);
    grid-template-areas:
        ". b . a . . . ."
        ". c c c c c c c";

`
const Main = (props) => {

    return (
        <MainBody>
        <Picture />
        <NavBar />
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/resume' component={Resume}/>
            {/* <Route path='/projects' component={Projects}/> */}
        </Switch>
        </MainBody>
    );

}

export default Main;