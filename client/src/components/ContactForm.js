import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

const ContactForm = (props) => {
    const {
    className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const modalBody = document.getElementById('modalBody');
        const modalHeader = document.getElementById('modalHeader');

        if (name !== '' || email !== '' || message !== '') {
          axios.post('/api/contact', {
            from: `${name} ${email}`,
            message
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
          modal.innerText = 'Test';
          document.getElementById('contactForm').reset();
        } else {
          modalBody.innerText = 'Please fill in all fields before submitting.';
          modalHeader.innerText = 'Oops, a mistake was made!';
        }

        
    }

    

        return(
            <Form id='contactForm' onSubmit={handleSubmit} className='contactForm' method="POST">
      <FormGroup>
        <Label for="name"></Label>
        <Input type="text" name="name" id="name" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="email"></Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="message"></Label>
        <Input type="textarea" name="message" id="message" placeholder="Message"/>
      </FormGroup>
      <Button type="Submit" onClick={toggle}>Submit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} id='modalHeader' style={{fontSize: '1.5em'}}></ModalHeader>
        <ModalBody id='modalBody'>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>Ok</Button>
        </ModalFooter>
      </Modal>
    </Form>
        );
}

export default ContactForm; 