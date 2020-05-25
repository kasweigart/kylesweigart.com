import React from 'react';
import './css/App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from "./images/logo.png";
import githubLogo from "./images/githublogo.png";
import linkedInLogo from "./images/linkedinlogo.png";


function App() {
  return (
    <div className="main">
      <header className="header">
        <div className="headerContent">
        <div className="navLeft">
          <a href="https://www.kylesweigart.com">
          <img src={logo} alt="Logo" width='60px' height='60px' className='logo' />
          </a>
          <a href="https://github.com/kasweigart">
            <img src={githubLogo} className='connectLogo1' alt="GithubLogo"/>
          </a>
          <a href="https://www.linkedin.com/in/kylesweigart/">
          <img src={linkedInLogo} className='connectLogo2' alt="LinkedInLogo" width='32px' height='32px' />
          </a>
          </div>
          <div className="navRight">
          <div className="about">
            <Button outline color="info">About</Button>
          </div>
          <div className="portfolio">
          <Button outline color="info">Portfolio</Button>
          </div>
          <div className="contact">
          <Button outline color="info">Contact</Button>
          </div>
          </div>
        </div>
      </header>
      <div className="welcomeContent">
        <div className="welcome">
          <h1 className="myName">Kyle<br></br>Sweigart</h1>
          <h2 className="myTitle">Software Engineer<br>
          </br>Lancaster, Pennsylvania</h2>
        </div>
      </div>
      <div className="mainContent">
      <h2 className="aboutHeader">About</h2>
      <div className="aboutContent">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      </div>
      <div className="secContent">
      <h2 className="portfolioHeader">Portfolio</h2>
      <div className="portfolioContent">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      </div>
      <div className="tertContent">
      <h2 className='contactHeader'>Contact</h2>
      <div className="contactContent">
      <Form className='contactForm'>
      <FormGroup>
        <Label for="Name"></Label>
        <Input type="name" name="name" id="name" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="Email"></Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="Message"></Label>
        <Input type="textarea" name="message" id="message" placeholder="Message"/>
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
