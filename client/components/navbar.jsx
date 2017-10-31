import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ulist = styled.ul`
    display: grid;
    margin-top: 150px;
    grid-template-colums: 50px 50px 50px 50px;
    grid-template-rows: 30px 30px 30px 50px;
    list-style-type: none;
    grid-area: b;
    justify-self: center;
    margin-left: -20px;
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
            <NavItem to='/about'>About</NavItem>
            <NavItem to='/resume'> Resume</NavItem>
            <ExtLink href='https://github.com/cmiljour'>GitHub </ExtLink>
            <ExtLink href='https://www.linkedin.com/in/cory-miljour'> LinkedIn</ExtLink> 
        </Ulist>
)

export default NavBar;