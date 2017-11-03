import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const imgSrc = './baba.jpg';

const StyleImg = styled.div`
    grid-area: a;
    margin: 150px 0 0 0;
    justify-self: left;
    @media only screen and (max-width: 768px) {
        margin-top: 0px;
        justify-self: center;  
    }
`;

const Picture = (props) => {
        return (
            <StyleImg>
                <img src={require(`${imgSrc}`)} />
            </StyleImg>
        );
    }
    export default Picture;