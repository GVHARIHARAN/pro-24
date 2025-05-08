import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
  ListGroup,
} from "react-bootstrap";
import "./portfolio.css";
import G from "../src/g.png";
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const portfolio = () => {

  // contact

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  };

  const show = () => {
    const aboutElements = document.getElementsByClassName('about');
    for (let element of aboutElements) {
      element.style.display = 'block';
      alert('scroll my portfolio')
    }
  };

  const show1 = () => {
    const interestElements = document.getElementsByClassName('interest');
    for (let element of interestElements) {
      element.style.display = 'block';
      alert('scroll my portfolio')
    }
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
      {/* bar */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar expand="lg" className="bg-body-light" id="navb">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src={G} height={60} width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto col d-flex justify-content-end">
              <Nav.Link href="#" className="navberlink"  >
                Home
              </Nav.Link>
              <Nav.Link className="navberlink" onClick={() => show()}>
                About
              </Nav.Link>
              <Nav.Link className="navberlink" onClick={() => show1()}>
                Interest
              </Nav.Link>

              <Nav.Link className="navberlink">
                Project
              </Nav.Link>
              <Nav.Link className="navberlink">
                Concact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid welcom1" style={{ color: "#636b2f" }}>
        <div className="row welcome d-flex">
          <div className="col-12 col-lg-4 col-md-4  mt-sm-3 justify-content-between">
            <img src="" className="bgimage img-fluid" alt="" />
          </div>
          <div className=" col-12 col-lg-8 col-md-8  wrapper">
            {/* <h2 className=''>Welcome to my portfolio</h2> */}
            <h4 className="welh2">Hi I'm Hariharan G V</h4>

            <p className="mt-lg-3 welp">
              I'm a front-end developer focused on building
              responive,accessible,and <br /> interactive user interfaces using
              modern tools like HTML,CSS,JavaScript and React.
            </p>
            <a
              href="../src/Hariharan GV.pdf"
              download
              className="download-btn seecv"
            >
              Download CV{" "}
              <FaFileDownload style={{ backgroundColor: "white", color: ' #636b2f', padding: '1px' }} size={18} />{" "}
            </a>
          </div>

        </div>
      </div>
      {/* about */}
      <div className="container-fluid mt-5  about" style={{ color: "#636b2f", display: 'none' }}>
        <div className="row d-flex justify-content-evenly">
          <h1 className="text-center ">ABOUT</h1>

          <div
            className="col-12 col-md-5 mt-3 skillcol"
            style={{ backgroundColor: "#636b2f", color: "white" }}
          >
            <h2 className="mt-3 text-center"> Front-end Developer</h2>
            <p className="mt-3 text-center">
              I am a front-end developer with a passion for creating beautiful
              and functional user interfaces. I have experience with HTML, CSS,
              JavaScript, and React, and I am always eager to learn new
              technologies and frameworks.
            </p>
          </div>
          <div
            className="col-12 col-md-5 mt-3 skillcol"
            style={{ backgroundColor: "#636b2f", color: "white" }}
          >
            <h2 className="text-center mt-3">My Interest</h2>
            <p className="text-center">
              I am interested in web development, and I am always eager to learn
              new technologies and frameworks. I enjoy working on projects that
              challenge me and allow me to grow as a developer.
            </p>
          </div>
        </div>
      </div>
      {/* interest */}
      <div className="container-fluid mt-5  interest" style={{ color: "#636b2f", display: 'none' }}>
        <div className="row d-flex justify-content-evenly">
          <div
            className="col-12 col-md-5 mt-3 skillcol"
            style={{ backgroundColor: "#636b2f", color: "white" }}
          >
            <div className="row  d-flex justify-content-between mt-3">
              <h2 className="mt-2 text-center">Skills</h2>

              <div className="col-6 col-lg-4 mt-3 ">
                {" "}
                <FaHtml5 size={45} style={{ color: "darkorange" }} />
                <h5 className="mt-1">HTML</h5>{" "}
              </div>
              <div className="col-6 col-lg-4 mt-3">
                <FaCss3 size={45} style={{ color: "#1e90ff" }} />
                <h5 className="mt-1">CSS</h5>
              </div>
              <div className="col-6 col-lg-4 mt-3">
                <SiJavascript size={45} style={{ color: "yellow" }} />
                <h5 className="mt-1">JavaScript</h5>
              </div>
              <div className="col-6 col-lg-4 mt-3">
                <FaBootstrap size={45} style={{ color: "purple" }} />
                <h5 className="mt-1">Bootstrap</h5>
              </div>
              <div className="col-6 col-lg-4 mt-3">
                <RiReactjsFill size={45} style={{ color: "#82caff" }} />
                <h5 className="mt-1">React JS</h5>
              </div>
              <div className="col-6 col-lg-4 mt-3">
                <FaGithub size={45} style={{ color: "black" }} />
                <h5 className="mt-1">Github</h5>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-5 mt-3 skillcol"
            style={{ backgroundColor: "#636b2f", color: "white" }}
          >
            <h2 className="text-center mt-3"> Soft Skills</h2>
            <p className="mt-3">
              {" "}
              <VscCode /> Strong problem-solving and analytical abilities{" "}
            </p>
            <p className="">
              <VscCode /> Excellent communication and teamwork skills
            </p>
            <p className="">
              <VscCode /> Time management and ability to meet deadlines{" "}
            </p>
            <p className="">
              <VscCode /> Adaptability to new technologies and trends
            </p>
          </div>
        </div>
      </div>
      {/* project */}

      {/* contact */}
      <div className="container-fluid">
        <div className="row contactt d-flex ">
          <h2>Get in Touch</h2>
          <div className="col-12 col-md-6 col-lg-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="mobile"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}

                maxLength={10}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              /> <br />
              <button type="submit" className='btn'>Submit</button>
            </form>
          </div>
          <div className=" col col-12 col-md-6 col-lg-6 ">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3930.332227351772!2d78.11327307411116!3d9.906263274642527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTQnMjIuNSJOIDc4wrAwNic1Ny4xIkU!5e0!3m2!1sen!2sin!4v1746606955496!5m2!1sen!2sin" width="400" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </div>
      {/* footer */}
      <div className="container-fluid" style={{ color: "#636b2f" }}>
        <div className="row d-flex footer">
          <div className="col-12 col-md-6 col-lg-6 align-self-center ">
            <p className="copyright">
              © 2025 Copyright Hariharan.All Rights Reserved
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 justify-content-end align-self-center">
            <div className="social-icons justify-content-evenly ">
              <div className="icon-box facebook ">
                <div className="label">Facebook</div>
                <a href='https://www.facebook.com/imhariharasudhan' className="icon text-decoration-none"><i className="fab fa-facebook text-decoration-none" ></i></a>
              </div>
              <div className="icon-box instagram">
                <div className="label">Instagram</div>
                <a href='https://www.instagram.com/imhariharasudhan?igsh=bHRqaHIybzRhd3ls' className="icon text-decoration-none"><i className="fab fa-instagram text-decoration-none"></i></a>
              </div>
              <div className="icon-box linkedin">
                <div className="label">LinkedIn</div>
                <a href='https://www.linkedin.com/in/hariharan-g-v-6b902030a' className="icon text-decoration-none"><i className="fab fa-linkedin-in text-decoration-none"></i></a>
              </div>
              <div className="icon-box github">
                <div className="label">Github</div>
                <a href='https://github.com/GVHARIHARAN' className="icon text-decoration-none"><i className="fab fa-github text-decoration-none"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default portfolio;
