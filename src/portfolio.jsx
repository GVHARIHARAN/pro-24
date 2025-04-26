import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Offcanvas, ListGroup, } from 'react-bootstrap';
import './portfolio.css'
import G from '../src/g.png'
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";

const portfolio = () => {
    return (
        <>


            {/* bar */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Navbar expand="lg" className="bg-body-light" id="navb">
                <Container>
                    <Navbar.Brand href="#home" className=''>
                        <img src={G} height={60} width={80} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto col d-flex justify-content-end">
                            <Nav.Link href="#back1" className='navberlink'>Home</Nav.Link>
                            <Nav.Link href="" className='navberlink' >Interest</Nav.Link>
                            <Nav.Link href="#link" className='navberlink'>About</Nav.Link>
                            <Nav.Link href="#section" className='navberlink'>Project</Nav.Link>
                            <Nav.Link href="#section" className='navberlink'>Concact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           

            <div className="container-fluid welcom1">
                <div className="row welcome">
              
                    <div className=" col-12 col-md-8 col-lg-8 wrapper text-center">
                        {/* <h2 className=''>Welcome to my portfolio</h2> */}
                        <h2 className='welh2'>Hi I'm Hariharan G V</h2>

                        <p className='mt-lg-3 welp'>I'm a front-end developer focused on building responive,accessible,and interactive user interfaces using modern tools like HTML,CSS,JavaScript and React.</p>
                        <a href="../src/Hariharan GV.pdf" download className='download-btn seecv'>Download CV <FaFileDownload style={{ backgroundColor: 'white', }} size={18} /> </a>
                    </div>
                    <div className="col-3 ">

                    </div>

                </div>
            </div>
            {/* <div className="container-fluid mt-5"> 
                <div className="row">
                    <h1 className=''>About</h1>
                    <div className="col d-flex mt-1">

                        <div className="row d-flex justify-content-between">
                            <div className="col-6 col-lg-4"> <FaHtml5 size={45} />
                                <h5 className='mt-1'>HTML</h5> </div>
                            <div className="col-6 col-lg-4"><FaCss3 size={45} />
                                <h5 className='mt-1'>CSS</h5></div>
                            <div className="col-6 col-lg-4"><SiJavascript size={45} />
                                <h5 className='mt-1'>JavaScript</h5></div>
                            <div className="col-6 col-lg-4"><FaBootstrap size={45} />
                                <h5 className='mt-1'>Bootstrap</h5></div>
                            <div className="col-6 col-lg-4"><RiReactjsFill size={45} />
                                <h5 className='mt-1'>React JS</h5></div>
                            <div className="col-6 col-lg-4">< FaGithub size={45} />
                                <h5 className='mt-1'>Github</h5></div>
                        </div>

                    </div>

                    <div className="col">
                        <h2> Front-end Developer</h2>
                        <p className=''>I am a front-end developer with a passion for creating beautiful and functional user interfaces. I have experience with HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and frameworks.</p>

                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'>My Interest</h2>
                        <p className='text-center'>I am interested in web development, and I am always eager to learn new technologies and frameworks. I enjoy working on projects that challenge me and allow me to grow as a developer.</p>
                    </div>
                    <div className="col">
                        <h2 className='text-center'>My Skills</h2>
                        <p className='text-center'>I have experience with HTML, CSS, JavaScript, React, and Bootstrap. I am also familiar with Git and version control systems.</p>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default portfolio
