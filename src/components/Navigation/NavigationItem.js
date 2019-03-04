import React from 'react';
import styled from 'styled-components';

const NavItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid
      ${props => (props.active ? '#40a4c8' : 'transparent')};
    box-sizing: border-box;
    display: block;
    &:hover,
    &:active {
      cursor: pointer;
      background: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
  @media (max-width: 500px) {
    color: ${props => (props.active ? '#40a4c8' : '#8f5c2c')};
    margin: 10px 0;
    width: 100%;
    height: auto;
    display: block;
    color: #8f5c2c;
    a {
      color: #40a4c8;
    }
    &:hover {
      color: #40a4c8;
    }
  }
`;

const NavigationItem = props => (
  <NavItem active={props.active}>
    <a href={props.link}>{props.children}</a>
  </NavItem>
);

export default NavigationItem;
