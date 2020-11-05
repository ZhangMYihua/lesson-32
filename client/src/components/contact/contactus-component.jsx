import React from 'react';
import {Form, Button} from 'react-bootstrap';

export const ContactUs = () => {

    return (
        <Form >
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@gmail.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Main category</Form.Label>
            <Form.Control as="select">
            <option>Find out more about product</option>
            <option>Delivery enquiry</option>
            <option>Others</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Tell us more details</Form.Label> */}
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
            <Button onClick={() => alert('Form submitted!')}>
                Submit    
            </Button>
        </Form>
       
    )
}

