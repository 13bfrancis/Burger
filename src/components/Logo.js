import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/burger-logo.png';

const ImgWrapper = styled.div`
  background: white;
  padding: 8px;
  height: ${props => (props.height ? props.height : '100%')};
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: ${props => (props.margin ? props.margin : 'default')};
`;
const Img = styled.img`
  height: 100%;
`;

const Logo = props => (
  <ImgWrapper height={props.height} margin={props.margin}>
    <Img src={logo} alt="Burger Logo" />
  </ImgWrapper>
);

export default Logo;
