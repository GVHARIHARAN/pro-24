import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import  '../src/log-in.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    let ld;
    let n;

    function sum() {
        var b = document.getElementById("pa").value;
        if (b == '') {
            alert("please fill the name and password");
        }
        
        else {
            var d = Math.trunc(Math.random() * 10000);
            localStorage.setItem("otp", d);
            ld = localStorage.getItem("otp");
            alert("OTP"+":"+d);

        }
    }
        function demo() {
            var a = document.getElementById("na").value;
            var b = document.getElementById("pa").value;
            var c = document.getElementById("ot").value;

            localStorage.setItem("na", a);
            n = localStorage.getItem("na");

            if (a === "" && b === "" && c === "") {
                document.getElementById("na").style.borderColor = "red";
                document.getElementById("pa").style.borderColor = "red";
                document.getElementById("ot").style.borderColor = "red";
                alert("please fill the details");
            } else if (a === "" && b === "") {
                document.getElementById("na").style.borderColor = "red";
                document.getElementById("pa").style.borderColor = "red";
            } else if (b === "" && c === "") {
                document.getElementById("pa").style.borderColor = "red";
                document.getElementById("ot").style.borderColor = "red";
            } else if (c === "" && a === "") {
                document.getElementById("ot").style.borderColor = "red";
                document.getElementById("na").style.borderColor = "red";
            } else if (a === "") {
                document.getElementById("na").style.borderColor = "red";
                document.getElementById("pa").style.borderColor = "green";
                document.getElementById("ot").style.borderColor = "green";
            } else if (b === "") {
                document.getElementById("pa").style.borderColor = "red";
                document.getElementById("ot").style.borderColor = "green";
                document.getElementById("na").style.borderColor = "green";
            } else if (c === "") {
                document.getElementById("ot").style.borderColor = "red";
                document.getElementById("na").style.borderColor = "green";
                document.getElementById("pa").style.borderColor = "green";
            } else if (c === ld) {
                document.getElementById("na").style.borderColor = "green";
                document.getElementById("pa").style.borderColor = "green";
                document.getElementById("ot").style.borderColor = "green";
                alert("Welcome" + " " + n);
                navigate('/tasku');
            } else if (c !== ld) {
                document.getElementById("na").style.borderColor = "green";
                document.getElementById("pa").style.borderColor = "green";
                document.getElementById("ot").style.borderColor = "red";
            } else {
                alert("log in failed");
            }
        }

        return (
            <>
                <Navbar expand="lg" className="bg-body-dark" id="navbar">
                    <Container >
                        <Navbar.Brand href="#home">  <h2 class="text-light">HOTEL R </h2></Navbar.Brand>
                        
                    </Container>
                </Navbar>
                <div className='container-fluid' id='login'>
                    <div className='row '>
                        <div className='col-md-6 col-lg-5 mx-auto boxlo'
                         data-aos="zoom-out-left"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="false">
                            <form action="">
                                <h1 className='h1 text-center text-light'>Log in</h1>
                                <span className='form-group'>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className='form-control bg-black text-light' placeholder='' id="na" required  />
                                </span>
                                <span className='form-group'>
                                    <label htmlFor="password">Password:</label>
                                    <input type="password"  className='form-control bg-black text-light'  placeholder='' id="pa" minLength={8} required/>
                                </span>
                                <span className='form-group'>
                                    <label htmlFor="otp">OTP:</label>
                                    <input type="text" className='form-control bg-black text-light'  placeholder=''  id="ot" required/>
                                </span>
                                <button type="button" id='btn' className='btn btn-outline-light' onClick={sum}>OTP</button>
                                <button type="button" id='btn' className='btn btn-outline-light' onClick={demo}>Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );

    }

export default Login;