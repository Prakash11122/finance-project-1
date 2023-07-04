
import { Button, Form } from 'react-bootstrap';
import SignImg from './SignImg';
import { NavLink } from 'react-router-dom';

const Otppage = () => {
    

    return (
        <div className="container mt-5">
            <section className='d-flex justify-content-between'>
            <div className="left_data mt-5 p-3" style={{ width: "100%" }}>
                <h3 className="text-center col-lg-6">OTP VARIFICATION</h3>
                <Form >
                    <Form.Group className="mb-3 col-lg-6" controlId="otp">
                        <Form.Label>OTP</Form.Label>
                        <Form.Control type="username" placeholder="Enter Otp" />

                    </Form.Group>
                    <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }}  type="login">
                        <span> <NavLink to="/Dashboard"> Login</NavLink> </span>  
                    </Button>
                </Form>
                </div>
                <SignImg />
            </section>
        </div>
    );
};

export default Otppage;
