import React from 'react';
import HeaderPage from './headermenu';
import myimages from './imgs/logo192.png';

function AboutPage() {
  const containerStyle = {
    minHeight: '100vh', // Set a minimum height to fill the viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block', // Ensure the image is a block-level element
    margin: '0 auto',
    marginTop:'100px' // Center the image horizontally
  };

  const descriptionStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    height: '60px',
    width: '100%', // Set the width to 100%
    position: 'fixed', // Fixed position to stick to the bottom
    bottom: 0, // Stick to the bottom
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  };


  const year = new Date();

  return (
    <div style={containerStyle}>
      <HeaderPage style={headerStyle} />
      <div>
        <img src={myimages} alt="logo" style={imageStyle} />
        <div style={descriptionStyle}>
          <h1 style={{ fontSize: '24px' }}>About React.js</h1>
          <p>
            React.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces (UIs) and single-page applications. Developed and maintained by Facebook (now Meta) and a community of developers, React was first released in 2013 and has since gained widespread adoption in the web development community.
          </p>
        </div>
      </div>
      <div style={footerStyle}>
      Copyrights &copy;{year.getFullYear()}
      </div>
    </div>
  );
}

export default AboutPage;
