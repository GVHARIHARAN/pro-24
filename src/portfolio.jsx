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
import { VscCode } from "react-icons/vsc";

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


            <div className="container-fluid welcom1" style={{ color: '#636b2f' }}>
                <div className="row welcome">

                    <div className=" col-10 col-md-8 col-lg-8 wrapper ">
                        {/* <h2 className=''>Welcome to my portfolio</h2> */}
                        <h4 className='welh2'>Hi I'm Hariharan G V</h4>

                        <p className='mt-3 welp'>I'm a front-end developer focused on building responive,accessible,and <br /> interactive user interfaces using modern tools like HTML,CSS,JavaScript and React.</p>
                        <a href="../src/Hariharan GV.pdf" download className='download-btn seecv'>Download CV <FaFileDownload style={{ backgroundColor: 'white', }} size={18} /> </a>
                    </div>
                    <div className="col-3 ">

                    </div>

                </div>
            </div>
            <div className="container-fluid mt-5" style={{ color: '#636b2f' }}>
                <div className="row d-flex justify-content-evenly">
                    <h1 className='text-center '>ABOUT</h1>

                    <div className="col-12 col-md-5 mt-3 skillcol" style={{ backgroundColor:'#636b2f',color:'white'}}>
                        <h2 className='mt-3 text-center'> Front-end Developer</h2>
                        <p className='mt-3 text-center'>I am a front-end developer with a passion for creating beautiful and functional user interfaces. I have experience with HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and frameworks.</p>

                    </div>
                    <div className="col-12 col-md-5 mt-3 skillcol" style={{ backgroundColor:'#636b2f',color:'white'}}>
                        <h2 className='text-center mt-3'>My Interest</h2>
                        <p className='text-center'>I am interested in web development, and I am always eager to learn new technologies and frameworks. I enjoy working on projects that challenge me and allow me to grow as a developer.</p>
                    </div>


                </div>
            </div>
            <div className="container-fluid mt-5" style={{ color: '#636b2f', }}>
                <div className="row d-flex justify-content-evenly">
                   
                    <div className="col-12 col-md-5 mt-3 skillcol" style={{ backgroundColor:'#636b2f',color:'white'}}>

                        <div className="row  d-flex justify-content-between mt-3">
                            <h2 className='mt-2 text-center'>Skills</h2>

                            <div className="col-6 col-lg-4 mt-3 "> <FaHtml5 size={45} style={{ color: 'darkorange' }} />
                                <h5 className='mt-1'>HTML</h5> </div>
                            <div className="col-6 col-lg-4 mt-3"><FaCss3 size={45} style={{ color: '#1e90ff' }} />
                                <h5 className='mt-1'>CSS</h5></div>
                            <div className="col-6 col-lg-4 mt-3"><SiJavascript size={45} style={{ color: 'yellow' }} />
                                <h5 className='mt-1'>JavaScript</h5></div>
                            <div className="col-6 col-lg-4 mt-3"><FaBootstrap size={45} style={{ color: 'purple' }} />
                                <h5 className='mt-1'>Bootstrap</h5></div>
                            <div className="col-6 col-lg-4 mt-3"><RiReactjsFill size={45} style={{ color: '#82caff' }} />
                                <h5 className='mt-1'>React JS</h5></div>
                            <div className="col-6 col-lg-4 mt-3">< FaGithub size={45} style={{ color: 'black' }} />
                                <h5 className='mt-1'>Github</h5></div>
                        </div>

                    </div>
                    <div className="col-12 col-md-5 mt-3 skillcol" style={{ backgroundColor:'#636b2f',color:'white'}}>
                        <h2 className='text-center mt-3'> Soft Skills</h2>
                        <p className='mt-3'> <VscCode /> Strong problem-solving and analytical abilities </p>
                        <p className=""><VscCode /> Excellent communication and teamwork skills</p>
                        <p className=""><VscCode /> Time management and ability to meet deadlines </p>
                        <p className=""><VscCode /> Adaptability to new technologies and trends</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default portfolio
