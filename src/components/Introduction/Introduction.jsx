import React from 'react';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import BubbleButton from '../BubbleButton/BubbleButton';

const FixedTitle = styled.div`
position: fixed;
margin: 10px;
background: transparent;
padding: 10px;
font-family: 'Megrim', cursive;
font-weight: 400;
z-index: 100;
top: 0;
left: 0;
font-size: 40px;
`;

const ResponsiveTyping = styled(Typing)`
font-size: 27px;
.highlighted {
  border-bottom: 1px dotted #fff;
}
.whiteCursor {
  color: white;
}
`;

const RoundImage = styled.img`
max-width: 400px;
max-height: 400px;
width: 80vw;
height: 80vw;
border-radius: 50%;
margin: 30px;
-webkit-box-shadow: -14px 14px 48px -19px rgba(0,0,0,0.75);
-moz-box-shadow: -14px 14px 48px -19px rgba(0,0,0,0.75);
box-shadow: -14px 14px 48px -19px rgba(0,0,0,0.75);
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

const Introduction = () => (
  <Container>
    <FixedTitle>HAP</FixedTitle>
    <RoundImage src="https://raw.githubusercontent.com/hectorandac/MeetAcosta/master/public/hector.jpg" className="App-logo" alt="logo" />
    <span style={{ fontFamily: "'Megrim', cursive", fontWeight: 200 }}>Héctor Acosta Pozo</span>
    <ResponsiveTyping cursorClassName="whiteCursor">
      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 200 }}>
        <span className="highlighted">Full-Stack</span>
        {' '}
        developer
      </p>
    </ResponsiveTyping>
    <div style={{ display: 'flex', justifyItems: 'space-between' }}>
      <BubbleButton iconClass="fab fa-github" onClick={() => { window.location.href = 'https://github.com/hectorandac'; }} />
      <BubbleButton iconClass="fab fa-linkedin-in" onClick={() => { window.location.href = 'https://www.linkedin.com/in/hector-acosta-213388106/'; }} />
    </div>
  </Container>
);

export default Introduction;
