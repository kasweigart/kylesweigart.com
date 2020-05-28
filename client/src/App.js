import React from 'react';
import Portfolio from './components/portfolio';
import './css/App.css';
import logo from "./images/logo.png";
import githubLogo from "./images/githublogo.png";
import linkedInLogo from "./images/linkedinlogo.png";
import ContactForm from './components/ContactForm';
import { Button } from 'reactstrap';
import Dropdown from './components/MobileDropdown';


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
            <img src={githubLogo} className='connectLogo1' alt="GithubLogo" width='32px' height='32px'/>
          </a>
          <a href="https://www.linkedin.com/in/kylesweigart/">
          <img src={linkedInLogo} className='connectLogo2' alt="LinkedInLogo" width='32px' height='32px' />
          </a>
          </div>
          <div className="navRight">
          <div className="about">
            <a href="#about">
            <Button outline color="info">About</Button>
            </a>
          </div>
          <div className="portfolio">
          <a href="#portfolio">
          <Button outline color="info">Portfolio</Button>
          </a>
          </div>
          <div className="contact">
          <a href="#contact">
          <Button outline color="info">Contact</Button>
          </a>
          
          </div>
          <a href="#dropdown" id="icon">
            <Dropdown />
          </a>
          </div>
        </div>
      </header>
      <div className="welcomeContent">
          <h1 className="myName">Kyle<br></br>Sweigart</h1>
          <h2 className="myTitle">Software Engineer<br>
          </br>Lancaster, Pennsylvania</h2>
      </div>
      <div id="about">
      <h2 className="aboutHeader">About</h2>
      <div className="aboutContent">
      I have experience in software engineering and creating clean functionable websites. I work with technologies such as ReactJS, ExpressJS, and several others. I'm constantly learning and always ready for the next challenge that comes in the way.
      </div>
      </div>
      <div id="portfolio">
      <h2 className="portfolioHeader">Portfolio</h2>
      <div className="portfolioContent">
      <Portfolio />
      </div>
      </div>
      <div id="contact">
      <h2 className='contactHeader'>Contact</h2>
      <div className="contactContent">
        <ContactForm />
      </div>
      </div>
      <div className="footer">
      <div className="footerContent">
      <div>© 2020 Kyle Sweigart<br></br></div>
      <div style={{fontSize: "2px"}}>You found me!</div>
      </div>
      </div>
    </div>
  );
}

export default App;
