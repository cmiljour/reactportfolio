import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ulist = styled.div`
    display: grid;
    margin-top: 150px;
    grid-template-colums: 50px 50px 50px 50px;
    grid-template-rows: 30px 30px 30px 50px;
    list-style-type: none;
    grid-area: b;
    justify-self: center;
    margin-left: -20px;
    @media only screen and (max-width: 768px) {
       display: flex;
       justify-self: center;
        margin-top: 20px;
        margin-left: 0px ;      
    }
`
const Litem = styled.div`
    @media only screen and (max-width: 768px) {
        margin-right: 10px; 
        text-decoration: none;
    }
`
const NavItem = styled(Link).attrs({
})`
    text-decoration: none;
    font-weight: bolder;
    color:black;
    text-shadow: 1px 1px 2px black;
`;

const ExtLink = styled.a`
    text-decoration: none;
    font-weight: bolder;
    color:black;
    text-shadow: 1px 1px 2px black;
`
const NavBar = (props) => (
        <Ulist>
            <Litem><NavItem to='/about'>About</NavItem></Litem>
            <Litem><NavItem to='/resume'> Resume</NavItem></Litem>
            <Litem><ExtLink href='https://github.com/cmiljour'>GitHub </ExtLink></Litem>
            <Litem><ExtLink href='https://www.linkedin.com/in/cory-miljour'> LinkedIn</ExtLink></Litem> 
        </Ulist>
)

export default NavBar;