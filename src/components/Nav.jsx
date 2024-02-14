import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Nav.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Modal, Box } from '@mui/material';
import { IoIosArrowForward } from 'react-icons/io'
import { IoReorderThree } from "react-icons/io5";
import JG20 from '../../src/images/JG20-1.jpg'
import MY275 from '../../src/images/my275-1.jpg'
import YY26 from '../../src/images/YY26-1.jpg'
import XWC05 from '../../src/images/XW-CO5-1.jpg'
import XWXL09 from '../../src/images/XWXL09-1.jpg'
import Logo from '../images/Logo.png';


const Nav = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    return (
        <>
            <div className="container-fluid nav">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="nav-wrapper">
                                <div className='d-flex'>
                                    <button className="toggle_btn" onClick={handleShow}>
                                        <IoReorderThree />
                                    </button>
                                    <button className="all-categories-button" onClick={() => navigate("/")}>
                                        {/* <FaBars className="icon" /> */}
                                        Home
                                    </button>
                                    <nav className="nav-list">
                                        <ul>
                                            {/* <li style={{borderRight: "1px solid white"}} onClick={() => navigate("/")}>Home</li> */}
                                            <li style={{borderRight: "1px solid white"}} onClick={() => navigate("/about")}>About</li>
                                            <li style={{borderRight: "1px solid white"}} onClick={() => navigate("/contact")}>Contact</li>
                                            <li onClick={() => navigate("/products")}>Products</li>
                                        </ul>
                                    </nav>
                                </div>
                                <Link to='/quote'><button className="quote-button" Link='/quote'>Request Quote</button></Link>
                            </div>
                            <Offcanvas show={show} onHide={handleClose} className style={{ width: "250px" }}>
                                <img src={Logo} alt="" className="logo mt-3" style={{ width: "100%" }} />
                                <nav className="nav-lists mt-4">
                                    <ul>
                                        <li onClick={() => navigate("/")}>Home</li>
                                        <li onClick={() => navigate("/about")}>About</li>
                                        <li onClick={() => navigate("/contact")}>Contact</li>
                                        <li onClick={() => navigate("/products")}>Products</li>
                                    </ul>
                                </nav>
                            </Offcanvas>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;



