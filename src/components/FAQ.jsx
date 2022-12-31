import React from 'react';
import vect from '../assets/vect.png'
import Form from 'react-bootstrap/Form'



const FAQ = () => {
  return (

    <div className='faq'>

      <div className='faq-div'>
        <h3 className='faq-head'>FAQs</h3>
      <h1 className='faq-text'>Have questions? We’re here to help.</h1>
      </div>
     
        <input type="text" className='only'  placeholder={`Search Questions`} />
     
      <div className="select-bar">
      {/* className="mb-3" */}
      <Form.Select  style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} size=' md'>
          <option className='form-text' >What is recruitment system and execution?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>Do I have to be HR to use tools, procedure?</option>
        </Form.Select >
        <Form.Select className=' ' style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} size=' md'>
          <option className='f-text'>How can I customize a package?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>When do I get my package after paying?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='form-text' >Can I integrate system to our HR system?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>Is there a refund policy?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>What does the office tool entail?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>Is it free?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md' >
          <option className='f-text'>Can there be a payment plan?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='form-text'>If I have HR challenge, can I share?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>Can I get only one feature?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>Can there be a payment plan?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>I want to get a consultation what do I do?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>I want to be trained as an HR what do I do?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='form-text'>Can I use tool and system without website?</option>
        </Form.Select>
        <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='f-text'>How do I manage performance of my team?</option>
        </Form.Select>
      <Form.Select style={{backgroundColor: '#EEEEEE', paddingTop: '20px'}} className=' ' size=' md'>
          <option className='form-text'>Can system sort out payroll, salary process?</option>
        </Form.Select>
      </div>
   
    </div>
  );
}


export default FAQ
