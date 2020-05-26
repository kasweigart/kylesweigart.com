import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3000/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contactForm').reset();
    }

    render(){
        return(
            <Form id='contactForm' onSubmit={this.handleSubmit.bind(this)} className='contactForm' method="POST">
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
      <Button>Submit</Button>
    </Form>
        )
    }
}

export default ContactForm; 