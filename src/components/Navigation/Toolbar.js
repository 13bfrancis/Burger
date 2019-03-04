import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationItems from './NavigationItems';

const ToolbarWrapper = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 20;
`;
const Nav = styled.nav`
  height: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Menu = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 500px) {
    display: none;
  }
`;
const Toolbar = props => (
  <ToolbarWrapper>
    <Menu onClick={props.opened}>MENU</Menu>
    <Logo height="80%" />
    <Nav>
      <NavigationItems />
    </Nav>
  </ToolbarWrapper>
);
export default Toolbar;
