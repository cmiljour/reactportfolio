import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Ulist = styled.ul`
    display: grid;
    margin-top: 150px;
    grid-template-rows: 30px 30px 30px 50px;
    list-style-type: none;
    grid-area: b;
    justify-self: center;
`
const Listitem = styled.li`
    ${'' /* background-color: lightblue; */}
`

// const activeclassname = 'nav-item-active'

const NavItem = styled(Link).attrs({
    // activeclassname
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
            <NavItem to='/about'>About Me</NavItem>
            <NavItem to='/resume'> Resume</NavItem>
            <ExtLink href='https://github.com/cmiljour'> My GitHub </ExtLink>
            <ExtLink href='https://www.linkedin.com/in/cory-miljour'> LinkedIn</ExtLink> 
        </Ulist>
)

export default NavBar;