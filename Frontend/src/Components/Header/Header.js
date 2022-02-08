import React,{useRef} from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Items from './Items';
import {Container} from 'react-bootstrap';
import logo from './logo.png'
import { Link } from 'react-router-dom';
const Header = () => {

    const start = <Link to='/'> <img alt="logo" src={logo}  height="100%" width="250px" className="mr-2"></img>   </Link>;
    return (
        <header>
            <Container>
                    <Menubar className='menu' model={Items} start={start} />
            </Container>
        </header>
    );
}

export default Header


