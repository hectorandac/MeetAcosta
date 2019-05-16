import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';
import Particles from 'react-particles-js';
import Introduction from './components/Introduction/Introduction';

const Holder = styled.div`
text-align: center;
`;

const Header = styled.header`
  background-image: linear-gradient(#053C5E, #3C6E71);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`;

const BackGroundParticles = styled(Particles)`
width: 100%;
height: 100%;
position: absolute;
`;

const ParticleParams = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1657.2100474277727,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'triangle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 8,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 239.76023976023976,
        line_linked: {
          opacity: 0.6961815252851514,
        },
      },
      bubble: {
        distance: 119.88011988011988,
        size: 23.976023976023978,
        duration: 1,
        opacity: 0.47952047952047955,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Holder className="App">
        <Header className="App-header">
          <Introduction />
          <BackGroundParticles params={ParticleParams} />
        </Header>
      </Holder>
    );
  }
}

export default App;
