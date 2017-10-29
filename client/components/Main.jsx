import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavBar from './navbar.jsx';
import TextArea from './TextArea.jsx';
import Picture from './Picture.jsx';

const MainBody = styled.div`
    display: grid;
    ${'' /* margin-left: -40px; */}
    grid-template-columns: repeat (8, 1fr);
    grid-template-rows: repeat (2, 1fr);
    grid-template-areas:
        ". b . . a . . ."
        ". c c c c c c c";

`
const Main = (props) => {

    return (
        <MainBody>
        <Picture />
        <NavBar />
        <TextArea />
        </MainBody>
    );

}

export default Main;