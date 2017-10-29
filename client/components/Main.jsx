import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavBar from './navbar.jsx';
import TextArea from './TextArea.jsx';
import Picture from './Picture.jsx';

const MainBody = styled.div`
    display: grid;
    margin-left: -40px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

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