import React from 'react';
import './css/App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from "./logo.png";


function App() {
  return (
    <div className="main">
      <header className="header">
        <div className="headerContent">
          <img src={logo} alt="Logo" width='60px' height='60px' className='logo'/>
            
          
          <div className="nav">
          <div className="about">
            <Button color="info">ABOUT</Button>
          </div>
          <div className="portfolio">
          <Button color="info">PORTFOLIO</Button>
          </div>
          <div className="contact">
          <Button color="info">CONTACT</Button>
          </div>
          </div>
        </div>
      </header>
      <div className="welcomeContent">
      Software Engineer<br></br>Lancaster, PA
      </div>
      <div className="mainContent">
      <h2 className="aboutHeader">ABOUT</h2>
      <div className="aboutContent">
      
      </div>
      </div>
      <div className="secContent">
      <h2 className="portfolioHeader">PORTFOLIO</h2>
      <div className="portfolioContent">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      </div>
      <div className="tertContent">
      <h2 className='contactHeader'>CONTACT</h2>
      <div className="contactContent">
      <Form>
      <FormGroup>
        <Label for="Name"></Label>
        <Input type="name" name="name" id="name" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="email"></Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="message"></Label>
        <Input type="text" name="message" id="message" placeholder="Message"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
      </div>
      </div>
      <div className="footer">
      <div className="footerContent">
      © 2020 Kyle Sweigart
      </div>
      </div>
    </div>
  );
}

export default App;
