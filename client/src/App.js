import React from 'react';
import './css/App.css';

function App() {
  return (
    <div className="main">
      <header className="header">
        <div className="headerContent">
          <div className="logo">
            Kyle Sweigart
          </div>
          <div className="nav">
          <div className="about">
            ABOUT
          </div>
          <div className="portfolio">
            PORTFOLIO
          </div>
          <div className="contact">
            CONTACT
          </div>
          </div>
        </div>
      </header>
      <div className="mainContent">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div className="secContent">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div className="footer">
      © 2020 Kyle Sweigart
      </div>
    </div>
  );
}

export default App;
