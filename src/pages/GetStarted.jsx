import React, {useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer'
import Navpage from '../components/NavPage'
import { Select } from 'react-select';
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';
// import  {FlagIcon} from 'flag-icon-css'

const GetStarted = () => {
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_qyw31dl', 'template_5foep0c', form.current, 'hCA_n7mXmo1OHdVJA')
      .then((result) => {
          console.log(result.text);
          console.log("Sent")
          navigate('/getfeedback')
      }, (error) => {
          console.log(error.text);
          alert('You have made an error!')
      });
  };

  return (
    <>
      <Navpage/>
      <div className='begin'>
        <div className='head'>
        <h1 className='start-head'>Get Started </h1>
        </div>
        <div className='play-form'>

        <p className='begin-p'>Let us get to know you and your business</p>
      <form onSubmit={sendEmail} ref={form} className='start-form'>
       
        <div className='begin-form1'>
        <Form.Group className='border-form1' controlId="formBasicName">
        <Form.Control type="text" placeholder="First Name" name='user_name'  className='border-form'/>
        
      </Form.Group>

      <Form.Group className='border-form1' controlId="formBasicName">
        <Form.Control type="text" placeholder="Last Name" name='user_name' className='border-form'/>
       
      </Form.Group>

        </div>
      <div className='begin-form6'>
      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="email" name='user_email' placeholder="Email address"  className='border-form'/>
      </Form.Group>
      <Form.Group className='begin-form4' controlId="formBasicNumber">
     <Form.Control 
        type="number" placeholder="Phone number(Whatsapp number preferably)"  className='border-form6'/>
      </Form.Group>
      </div>

        <div className='begin-form6'>
        <Form.Group className='begin-form5' controlId="formBasicText">
        <Form.Control type="text" name='message' placeholder="How did you hear about us"  className='border-form'/>      
        </Form.Group>
        
        </div>
        <div className='begin-form6'>
        <Form.Group className='begin-form8' controlId="formBasicText">
        <Form.Control type="text" name='message' placeholder="Address"  className='border-form'/>      
        </Form.Group>
        
        </div>

        <div className='start-form3'>
        <Form.Group className='border-form1' controlId="formBasicName">
        <Form.Control type="text" placeholder="Country" name='user_name'  className='border-form'/>
        
      </Form.Group>

      <Form.Group className='border-form1' controlId="formBasicName">
        <Form.Control type="text" placeholder="City" name='user_name' className='border-form'/>
       
      </Form.Group>

        </div>
       
      <Button variant="primary" className='begin-btn' type="submit">
        Submit
      </Button>
    </form>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default GetStarted
