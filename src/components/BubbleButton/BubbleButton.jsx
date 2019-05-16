import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const ButtonAnimation = posed.div({
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
  press: { scale: 0.8 },
});

const ButtonStyled = styled(ButtonAnimation)`
  background: ${props => props.background || 'white'};
  width: ${props => props.width || '60px'};
  height: ${props => props.height || '60px'};
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin: 8px;
  align-items: center;
  border-radius: 50%;
  -webkit-box-shadow: -14px 14px 48px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: -14px 14px 48px -19px rgba(0,0,0,0.75);
  box-shadow: -14px 14px 48px -19px rgba(0,0,0,0.75);
`;

const ColoredIcon = styled.i`
  color: #3C6E71;
  display: flex;
  text-align: center;
  font-size: 30px;
  width: 100%;
  height: 100%;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  line-height: 30px;
`;

const BubbleButton = props => (
  <ButtonStyled>
    <ColoredIcon onClick={props.onClick} className={props.iconClass} />
  </ButtonStyled>
);

export default BubbleButton;
