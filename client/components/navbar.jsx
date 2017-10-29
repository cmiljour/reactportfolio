import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



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

const NavBar = (props) => {

    return (

        <Ulist>
            <Listitem>About Me</Listitem>
            <Listitem>Project Links</Listitem>
            <Listitem>Resume</Listitem>
        </Ulist>

    );

}

export default NavBar;