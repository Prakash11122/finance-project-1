import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignImg from './SignImg';
import { NavLink } from 'react-router-dom';
import './Home.css';




const Home = () => {


    const getdata = (e) => {
        console.log(e.target.value);

    }





    return (
        <>
            <Form className='home-page '>
                <div className="container mt-5">
                    <section className='d-flex justify-content-between'>
                        <div className="left_data mt-5 p-3" style={{ width: "100%" }}>
                            <h3 className="text-center col-lg-6">Sign IN</h3>
                            <Form>
                                <Form.Group className="mb-3 col-lg-6" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" onChange={getdata} placeholder="Enter Username" />

                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={getdata} placeholder="Enter Password" />
                                    
                                </Form.Group>

                                <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="GenerateOTP">
                                    <span> <NavLink to="/Otppage"> GenerateOTP</NavLink> </span>
                                </Button>
                            </Form>
                        </div>
                        <SignImg />
                    </section>

                </div>
            </Form>
        </>
    )
}

export default Home
