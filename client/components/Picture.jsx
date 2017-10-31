import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const imgSrc = './baba.jpg';

const StyleImg = styled.div`
    grid-area: a;
    margin: 150px 0 0 0;
    justify-self: left;
`
const Picture = (props) => {
    
        return (
            <StyleImg>
                <img src={require(`${imgSrc}`)} />
            </StyleImg>
        );
    
    }
    
    export default Picture;