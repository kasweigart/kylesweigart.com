import React from 'react';
import Portfolio from './portfolio';
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
            <a href="#mainContent">
            <Button outline color="info">About</Button>
            </a>
          </div>
          <div className="portfolio">
          <a href="#secContent">
          <Button outline color="info">Portfolio</Button>
          </a>
          </div>
          <div className="contact">
          <a href="#tertContent">
          <Button outline color="info">Contact</Button>
          </a>
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
      <div id="mainContent">
      <h2 className="aboutHeader">About</h2>
      <div className="aboutContent">
      I have experience in software engineering and creating clean functionable websites. I work with technologies such as ReactJS, ExpressJS, and several others. I'm constantly learning and always ready for the next challenge that comes in the way.
      </div>
      </div>
      <div id="secContent">
      <h2 className="portfolioHeader">Portfolio</h2>
      <div className="portfolioContent">
      <Portfolio />
      </div>
      </div>
      <div id="tertContent">
      <h2 className='contactHeader'>Contact</h2>
      <div className="contactContent">
      <Form className='contactForm' method="POST" action='send'>
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
