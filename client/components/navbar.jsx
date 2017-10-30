import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Ulist = styled.ul`
    display: grid;
    margin-top: 150px;
    ${'' /* grid-template-columns: minmax(50px, 50px); */}
    grid-template-rows: 50px 50px 50px;
    list-style-type: none;
    grid-area: b;
    


`
const Listitem = styled.li`
    ${'' /* background-color: lightblue; */}
`

const NavBar = (props) => (
        <Ulist>
            <Listitem><Link to='/about'>About Me</Link></Listitem>
            <Listitem><Link to='/projects'>Project Links</Link></Listitem>
            <Listitem><Link to='/resume'> Resume</Link></Listitem>
        </Ulist>
)

export default NavBar;