import React, {useEffect,useState,useContext} from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './header.css'


const Header = props => {
    return(
        <>
            <div id="header">
                <img id='logo' src="https://j.top4top.io/p_2075oq51q1.png" alt="LOGO" />
                <div>
                    {/* <button id="signin">signin</button>
                    <button id="signup">New Property</button> */}
                    <Link to='/signin'>

                    <Button id="signin" variant="light">Signin</Button>
                    </Link>
                    <Link to='/signup'>
                    <Button variant="success">New Property</Button>{' '}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;
